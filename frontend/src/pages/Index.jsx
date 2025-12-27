import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, Mail, MapPin, Laptop, Globe, Smartphone, ShoppingBag, CheckCircle, Zap, Shield, Clock, TrendingUp, Cpu, Monitor, HardDrive, Wifi, Lock, RotateCcw, MessageCircle, Facebook, Instagram, Music2, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import logoMain from "../assets/logo-main.png";
import logoEagle from "../assets/logo-eagle.png";
import afficheSolutions from "../assets/affiche-solutions.png";

// Placeholder pour les images manquantes - utiliser des URLs absolues ou des placeholders
const posterAssistance = afficheSolutions;
const posterDiagnostic = afficheSolutions;
const posterMaintenance = afficheSolutions;
const perfumeMeringue = "https://via.placeholder.com/300x400?text=Meringue";
const perfumeAtlantis = "https://via.placeholder.com/300x400?text=Atlantis";
const perfumeBois = "https://via.placeholder.com/300x400?text=1+Bois";
const perfumeEclaire = "https://via.placeholder.com/300x400?text=Eclaire";
const perfumeYara = "https://via.placeholder.com/300x400?text=Yara";
const perfumeAqua = "https://via.placeholder.com/300x400?text=Aqua+Pura";
const perfumeAzure = "https://via.placeholder.com/300x400?text=Jean+Lowe+Azure";
const perfumeLuxe = "https://via.placeholder.com/300x400?text=Luxe+Blanc";
const paymentMethods = "https://via.placeholder.com/800x200?text=Payment+Methods";
const consoleBlancRose = "https://via.placeholder.com/400x400?text=Console+Blanc/Rose";
const consoleViolet = "https://via.placeholder.com/400x400?text=Console+Violet/Vert";

declare global {
  interface Window {
    paypal?: any;
    PayPalSDK?: any;
  }
}

const Index = () => {
  const paypalButtonRef = useRef<HTMLDivElement>(null);
  const paypalButtonsRendered = useRef(false);

  useEffect(() => {
    const loadPayPalButtons = () => {
      const paypal = window.PayPalSDK || window.paypal;
      
      if (!paypal || !paypalButtonRef.current || paypalButtonsRendered.current) {
        if (!paypal) {
          setTimeout(loadPayPalButtons, 500);
        }
        return;
      }

      paypalButtonsRendered.current = true;
      paypalButtonRef.current.innerHTML = '';

      paypal.Buttons({
        style: {
          layout: 'vertical',
          color: 'blue',
          shape: 'rect',
          label: 'pay'
        },
        createOrder: (data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [{
              description: "Console JellyMini5 E5 - 64 Go",
              amount: {
                currency_code: "EUR",
                value: "139.90"
              }
            }]
          });
        },
        onApprove: async (data: any, actions: any) => {
          const order = await actions.order.capture();
          alert(`Paiement réussi ! Merci pour votre commande. ID: ${order.id}`);
        },
        onError: (err: any) => {
          console.error('Erreur PayPal:', err);
          alert('Une erreur est survenue lors du paiement. Veuillez réessayer.');
        }
      }).render(paypalButtonRef.current);
    };

    loadPayPalButtons();
  }, []);
