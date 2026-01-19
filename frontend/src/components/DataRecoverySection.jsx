import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { 
  HardDrive, Monitor, Usb, Disc, 
  Search, ShieldCheck, Lock, MessageSquare,
  MessageCircle, AlertTriangle, Clock,
  CheckCircle, XCircle, Cpu, Database,
  Eye, FileCheck, ArrowRight, Info
} from 'lucide-react';
import './DataRecoverySection.css';

export const DataRecoverySection = () => {
  const lossReasons = [
    "Suppression accidentelle de fichiers importants",
    "Corbeille vidée par erreur",
    "Panne ou crash du système d'exploitation",
    "Disque dur ou SSD défaillant",
    "Clé USB ou carte mémoire endommagée",
    "Formatage involontaire d'un support"
  ];

  const doList = [
    "Arrêter immédiatement d'utiliser l'appareil",
    "Éviter toute installation de logiciel",
    "Ne pas écrire de nouvelles données sur le support",
    "Contacter un professionnel pour un diagnostic rapide"
  ];

  const dontList = [
    "Continuer à utiliser l'appareil normalement",
    "Tenter des solutions trouvées au hasard sur internet",
    "Multiplier les manipulations et tentatives",
    "Ouvrir ou démonter le disque dur vous-même"
  ];

  const supportedDevices = [
    { icon: Monitor, label: 'PC et Mac', description: "Ordinateurs de bureau et portables, toutes marques" },
    { icon: HardDrive, label: 'Disques durs HDD', description: "Disques mécaniques internes et externes" },
    { icon: Cpu, label: 'SSD', description: "Disques à mémoire flash, SATA ou NVMe" },
    { icon: Usb, label: 'Clés USB', description: "Tous types et capacités" },
    { icon: Disc, label: 'Cartes mémoire', description: "SD, microSD, CF, Memory Stick" }
  ];

  const processSteps = [
    { 
      number: "1", 
      title: "Diagnostic initial", 
      description: "Analyse de votre support pour évaluer l'état et identifier les causes de la perte."
    },
    { 
      number: "2", 
      title: "Évaluation des possibilités", 
      description: "Estimation du taux de récupération possible et transparence sur les chances de succès."
    },
    { 
      number: "3", 
      title: "Tentative de récupération", 
      description: "Utilisation d'outils professionnels adaptés à votre situation spécifique."
    },
    { 
      number: "4", 
      title: "Restitution des données", 
      description: "Transfert des fichiers récupérés sur un support externe sain de votre choix."
    }
  ];

  const valueProps = [
    { icon: Search, title: 'Diagnostic rapide', description: 'Évaluation immédiate de la situation et des possibilités' },
    { icon: ShieldCheck, title: 'Méthode professionnelle', description: 'Outils et protocoles adaptés à chaque cas' },
    { icon: Lock, title: 'Confidentialité totale', description: 'Vos données personnelles restent strictement privées' },
    { icon: MessageSquare, title: 'Transparence', description: 'Explication claire avant toute intervention' }
  ];

  return (
    <section className="data-recovery-section">
      <div className="data-recovery-container">
        {/* Header */}
        <div className="data-recovery-header">
          <div className="data-recovery-badge">
            <HardDrive className="h-4 w-4" />
            RÉCUPÉRATION DE DONNÉES
          </div>
          <h1 className="data-recovery-title">Récupération de données</h1>
          <p className="data-recovery-subtitle">
            Vos fichiers sont précieux. Nous faisons tout pour les retrouver.
          </p>
        </div>

        {/* 1️⃣ Bloc Comprendre la perte de données */}
        <Card className="data-recovery-main-card">
          <CardContent className="data-recovery-main-content">
            <div className="data-recovery-explanation">
              <div className="explanation-icon">
                <AlertTriangle className="h-8 w-8" />
              </div>
              <div className="explanation-text">
                <h2 className="explanation-title">Comprendre la perte de données</h2>
                <p>
                  La perte de données est une situation <strong>plus fréquente qu'on ne le pense</strong> et peut 
                  toucher n'importe quel utilisateur, qu'il soit particulier ou professionnel.
                </p>
                <p>
                  <strong>Les causes les plus courantes :</strong>
                </p>
                <ul className="loss-reasons-list">
                  {lossReasons.map((reason, index) => (
                    <li key={index}>
                      <Database className="h-4 w-4" />
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
                <p className="explanation-note">
                  Ces situations sont stressantes, mais dans de nombreux cas, <strong>une récupération 
                  partielle ou totale est possible</strong> si l'on réagit correctement.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 2️⃣ Bloc Réagir correctement - Do's and Don'ts */}
        <div className="do-dont-section">
          <h2 className="section-title-centered">
            <AlertTriangle className="h-6 w-6" />
            Comment réagir face à une perte de données ?
          </h2>
          <p className="do-dont-intro">
            Votre réaction immédiate peut faire toute la différence entre une récupération réussie et une perte définitive.
          </p>
          
          <div className="do-dont-grid">
            {/* DO */}
            <Card className="do-card">
              <CardContent className="do-card-content">
                <div className="do-header">
                  <CheckCircle className="h-6 w-6" />
                  <h3>Ce qu'il faut faire</h3>
                </div>
                <ul className="do-list">
                  {doList.map((item, index) => (
                    <li key={index}>
                      <CheckCircle className="h-4 w-4" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* DON'T */}
            <Card className="dont-card">
              <CardContent className="dont-card-content">
                <div className="dont-header">
                  <XCircle className="h-6 w-6" />
                  <h3>Ce qu'il faut éviter</h3>
                </div>
                <ul className="dont-list">
                  {dontList.map((item, index) => (
                    <li key={index}>
                      <XCircle className="h-4 w-4" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="urgency-note">
            <Clock className="h-5 w-5" />
            <p>
              <strong>Plus l'intervention est rapide, plus les chances de récupération sont élevées.</strong> 
              Chaque manipulation supplémentaire sur un support endommagé réduit les possibilités de récupération.
            </p>
          </div>
        </div>

        {/* 3️⃣ Bloc Supports pris en charge - Version enrichie */}
        <Card className="devices-card">
          <CardContent className="devices-card-content">
            <h2 className="section-title">
              <HardDrive className="h-6 w-6" />
              Supports pris en charge
            </h2>
            <p className="devices-intro">
              Nous intervenons sur la plupart des supports de stockage courants :
            </p>
            <div className="devices-grid-extended">
              {supportedDevices.map((device, index) => (
                <div key={index} className="device-item-extended">
                  <div className="device-icon-wrapper">
                    <device.icon className="h-6 w-6" />
                  </div>
                  <div className="device-info">
                    <h4>{device.label}</h4>
                    <p>{device.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 4️⃣ Bloc Méthode de travail */}
        <div className="process-section">
          <h2 className="section-title-centered">
            <FileCheck className="h-6 w-6" />
            Notre méthode de travail
          </h2>
          <p className="process-intro">
            Un processus rigoureux et transparent pour maximiser vos chances de récupération.
          </p>

          <div className="process-timeline">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="step-arrow" />
                )}
              </div>
            ))}
          </div>

          <div className="process-disclaimer">
            <Info className="h-5 w-5" />
            <div>
              <p><strong>Important :</strong> La récupération de données n'est jamais garantie à 100%. 
              Le taux de succès dépend de nombreux facteurs : type de panne, état du support, 
              manipulations effectuées avant le diagnostic.</p>
              <p>Nous nous engageons à une <strong>transparence totale</strong> : vous serez informé 
              des possibilités réelles avant toute intervention.</p>
            </div>
          </div>
        </div>

        {/* Notre approche - Valeurs */}
        <Card className="values-card">
          <CardContent className="values-card-content">
            <h2 className="section-title">Notre approche</h2>
            <div className="values-grid">
              {valueProps.map((prop, index) => (
                <div key={index} className="value-item">
                  <div className="value-icon">
                    <prop.icon className="h-5 w-5" />
                  </div>
                  <div className="value-content">
                    <h4 className="value-title">{prop.title}</h4>
                    <p className="value-description">{prop.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 5️⃣ Bloc Confiance & Confidentialité */}
        <Card className="confidentiality-card">
          <CardContent className="confidentiality-content">
            <div className="confidentiality-icon">
              <Lock className="h-10 w-10" />
            </div>
            <h2>Confidentialité & Respect de vos données</h2>
            <p>
              Nous comprenons que vos données personnelles et professionnelles sont <strong>sensibles et privées</strong>.
            </p>
            <ul className="confidentiality-list">
              <li>
                <Eye className="h-4 w-4" />
                <span><strong>Respect total</strong> de vos données personnelles</span>
              </li>
              <li>
                <ShieldCheck className="h-4 w-4" />
                <span><strong>Confidentialité garantie</strong> : aucun accès à vos fichiers sans nécessité</span>
              </li>
              <li>
                <Lock className="h-4 w-4" />
                <span><strong>Aucune exploitation</strong> des fichiers récupérés</span>
              </li>
            </ul>
            <p className="confidentiality-note">
              Votre confiance est notre priorité. Nous traitons chaque dossier avec la plus grande discrétion.
            </p>
          </CardContent>
        </Card>

        {/* 6️⃣ CTA renforcé */}
        <Card className="cta-card">
          <CardContent className="cta-card-content">
            <h2>Vous avez perdu des données ?</h2>
            <p className="cta-subtitle">
              N'attendez pas. Chaque minute compte pour maximiser les chances de récupération.
            </p>
            <Button 
              asChild
              size="lg"
              className="data-recovery-cta"
            >
              <a 
                href="https://wa.me/594694458584" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Contactez-nous maintenant
              </a>
            </Button>
            <p className="cta-reassurance">
              <Clock className="h-4 w-4" />
              Premier diagnostic gratuit • Réponse rapide • Sans engagement
            </p>
          </CardContent>
        </Card>

        {/* 7️⃣ Mention légale */}
        <div className="legal-mention">
          <Info className="h-4 w-4" />
          <p>
            <strong>Information importante :</strong> La récupération de données dépend de nombreux facteurs 
            (type de panne, état du support, manipulations antérieures) et ne peut être garantie. 
            Un diagnostic professionnel est systématiquement réalisé avant toute intervention afin de 
            vous informer des possibilités réelles de récupération.
          </p>
        </div>
      </div>
    </section>
  );
};
