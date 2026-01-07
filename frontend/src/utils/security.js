/**
 * Security utilities for frontend
 * Implements XSS protection, input validation, and sanitization
 */
import DOMPurify from 'dompurify';
import { z } from 'zod';

// Configure DOMPurify
DOMPurify.setConfig({
  ALLOWED_TAGS: [], // No HTML tags allowed by default
  ALLOWED_ATTR: [],
  KEEP_CONTENT: true,
  RETURN_DOM: false,
  RETURN_DOM_FRAGMENT: false,
});

/**
 * Sanitize string input to prevent XSS
 * @param {string} input - The input string to sanitize
 * @returns {string} - Sanitized string
 */
export const sanitizeString = (input) => {
  if (typeof input !== 'string') return '';
  return DOMPurify.sanitize(input, { ALLOWED_TAGS: [] }).trim();
};

/**
 * Sanitize HTML content (when HTML is needed)
 * @param {string} html - The HTML string to sanitize
 * @returns {string} - Sanitized HTML
 */
export const sanitizeHTML = (html) => {
  if (typeof html !== 'string') return '';
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br'],
    ALLOWED_ATTR: ['href', 'target', 'rel'],
  });
};

/**
 * Sanitize object values recursively
 * @param {Object} obj - Object to sanitize
 * @returns {Object} - Sanitized object
 */
export const sanitizeObject = (obj) => {
  if (typeof obj !== 'object' || obj === null) return obj;
  
  const sanitized = {};
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'string') {
      sanitized[key] = sanitizeString(value);
    } else if (typeof value === 'object' && value !== null) {
      sanitized[key] = sanitizeObject(value);
    } else {
      sanitized[key] = value;
    }
  }
  return sanitized;
};

// ============ Zod Validation Schemas ============

/**
 * Contact form validation schema
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(100, 'Le nom ne peut pas dépasser 100 caractères')
    .regex(/^[\p{L}\s\-']+$/u, 'Le nom contient des caractères invalides')
    .transform(val => sanitizeString(val)),
  
  email: z
    .string()
    .email('Adresse email invalide')
    .max(254, 'Email trop long')
    .transform(val => sanitizeString(val.toLowerCase())),
  
  phone: z
    .string()
    .max(20, 'Numéro de téléphone trop long')
    .regex(/^[\d\s\+\-\(\)]*$/, 'Format de téléphone invalide')
    .optional()
    .transform(val => val ? sanitizeString(val) : ''),
  
  service: z
    .string()
    .min(1, 'Veuillez sélectionner un service')
    .transform(val => sanitizeString(val)),
  
  message: z
    .string()
    .min(10, 'Le message doit contenir au moins 10 caractères')
    .max(2000, 'Le message ne peut pas dépasser 2000 caractères')
    .transform(val => sanitizeString(val)),
});

/**
 * URL validation schema
 */
export const urlSchema = z
  .string()
  .url('URL invalide')
  .refine(
    (url) => url.startsWith('https://') || url.startsWith('http://localhost'),
    'Seules les URLs HTTPS sont autorisées'
  );

/**
 * Validate and sanitize form data
 * @param {Object} data - Form data to validate
 * @param {z.ZodSchema} schema - Zod schema to use
 * @returns {{ success: boolean, data?: Object, errors?: Object }}
 */
export const validateForm = (data, schema) => {
  try {
    const validData = schema.parse(data);
    return { success: true, data: validData };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors = {};
      error.errors.forEach((err) => {
        const path = err.path.join('.');
        errors[path] = err.message;
      });
      return { success: false, errors };
    }
    return { success: false, errors: { general: 'Erreur de validation' } };
  }
};

// ============ Security Helpers ============

/**
 * Escape HTML special characters
 * @param {string} str - String to escape
 * @returns {string} - Escaped string
 */
export const escapeHTML = (str) => {
  if (typeof str !== 'string') return '';
  const escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;',
  };
  return str.replace(/[&<>"'/]/g, (char) => escapeMap[char]);
};

/**
 * Check if value contains potential injection patterns
 * @param {string} value - Value to check
 * @returns {boolean} - True if suspicious
 */
export const containsInjection = (value) => {
  if (typeof value !== 'string') return false;
  const patterns = [
    /<script/i,
    /javascript:/i,
    /on\w+\s*=/i,
    /\$where/i,
    /\$gt/i,
    /\$lt/i,
    /\$ne/i,
    /;\s*(drop|delete|update|insert)\s+/i,
  ];
  return patterns.some((pattern) => pattern.test(value));
};

/**
 * Generate a simple CSRF token for forms
 * Note: For full CSRF protection, use server-side tokens
 * @returns {string} - Random token
 */
export const generateCSRFToken = () => {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, (byte) => byte.toString(16).padStart(2, '0')).join('');
};

/**
 * Store CSRF token in sessionStorage
 */
export const storeCSRFToken = () => {
  const token = generateCSRFToken();
  sessionStorage.setItem('csrf_token', token);
  return token;
};

/**
 * Get stored CSRF token
 */
export const getCSRFToken = () => {
  return sessionStorage.getItem('csrf_token');
};

// ============ Secure Storage ============

/**
 * Secure wrapper for localStorage (no sensitive data)
 */
export const secureStorage = {
  set: (key, value) => {
    try {
      // Don't store sensitive data
      const sensitiveKeys = ['password', 'token', 'secret', 'key', 'auth'];
      if (sensitiveKeys.some((k) => key.toLowerCase().includes(k))) {
        console.warn('Sensitive data should not be stored in localStorage');
        return false;
      }
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.error('Storage error:', e);
      return false;
    }
  },
  get: (key) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (e) {
      return null;
    }
  },
  remove: (key) => {
    localStorage.removeItem(key);
  },
  clear: () => {
    localStorage.clear();
  },
};

export default {
  sanitizeString,
  sanitizeHTML,
  sanitizeObject,
  validateForm,
  contactFormSchema,
  escapeHTML,
  containsInjection,
  generateCSRFToken,
  storeCSRFToken,
  getCSRFToken,
  secureStorage,
};
