rajoute LM Studio encompétences // ===================================
// SYSTÈME DE TRADUCTION FR/EN
// ===================================

const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      services: "Services",
      expertise: "Expertise",
      contact: "Contact"
    },

    // Hero Section
    hero: {
      subtitle1: "Your Digital Renaissance Starts Here",
      title: "Transform Your Business with Artificial Intelligence",
      subtitle2: "Specialists in AI, NoCode, Automation & Cybersecurity. We bring your digital projects to life with custom solutions.",
      stat1: {
        number: "65%",
        label: "adopt generative AI"
      },
      stat2: {
        number: "+40%",
        label: "productivity boost"
      },
      stat3: {
        number: "22%",
        label: "cost reduction"
      },
      stat4: {
        number: "24/7",
        label: "continuous availability"
      }
    },

    // Services Section
    services: {
      title: "Our Services",
      subtitle: "Innovative solutions to propel your business into the future",

      ai: {
        title: "Artificial Intelligence",
        description: "Chatbot development, Machine Learning data analysis, and advanced AI API integration.",
        list: [
          "AI Chatbots & Assistants",
          "Machine Learning & Analytics",
          "OpenAI, Cursor, Comet",
          "AI Pair Programming"
        ]
      },

      nocode: {
        title: "NoCode Solutions",
        description: "Fast web application creation, intelligent automations, and custom workflows.",
        list: [
          "Rapid Web Applications",
          "n8n, Make",
          "Airtable, Notion",
          "Custom Workflows"
        ]
      },

      automation: {
        title: "Automation",
        description: "Custom Python scripts, GitHub Actions automation, and business process optimization.",
        list: [
          "Custom Python Scripts",
          "GitHub Actions",
          "Business Analysis (CBAP)",
          "Monitoring & Alerts"
        ]
      },

      cybersecurity: {
        title: "Cybersecurity",
        description: "Security audits, penetration testing, team training, and GDPR compliance.",
        list: [
          "Security Audits",
          "Penetration Testing",
          "Team Training",
          "GDPR Compliance"
        ]
      },

      business: {
        title: "Business Analysis",
        description: "Requirements analysis, product backlog management, and change management support.",
        list: [
          "Requirements Analysis",
          "Product Backlog (Waterfall/Hybrid/Agile)",
          "Project Management & Change Support"
        ]
      }
    },

    // Tech Stack Section
    techStack: {
      title: "Our Tech Stack",
      subtitle: "Cutting-edge technologies for high-performance solutions"
    },

    // Contact Section
    contact: {
      title: "Ready to Transform Your Business?",
      subtitle: "Contact us to discuss your project",
      form: {
        name: "Full Name",
        email: "Email",
        service: "Desired Service",
        servicePlaceholder: "Choose a service",
        serviceOptions: {
          ai: "Artificial Intelligence",
          nocode: "NoCode Solutions",
          automation: "Automation",
          cybersecurity: "Cybersecurity",
          business: "Business Analysis",
          project: "Project Management",
          other: "Other"
        },
        message: "Project Description",
        submit: "Send Request"
      }
    },

    // Footer
    footer: {
      tagline: "Your digital partner to be reborn in the AI era",
      sections: {
        services: "Services",
        resources: "Resources",
        contact: "Contact"
      },
      links: {
        github: "GitHub",
        technologies: "Technologies",
        readme: "Documentation",
        email: "Email",
        linkedin: "LinkedIn"
      },
      copyright: "© 2025 The Phoenix Agency. All rights reserved.",
      license: "All content, code, design and structure of this site are protected under commercial proprietary license. Any unauthorized reproduction, distribution or use is strictly prohibited.",
      lastUpdated: "Last updated: December 6, 2025"
    },

    // Cookie Banner
    cookie: {
      message: "We use cookies to improve your experience and analyze site traffic.",
      accept: "Accept",
      reject: "Decline"
    }
  },

  fr: {
    // Navigation
    nav: {
      home: "Accueil",
      services: "Services",
      expertise: "Expertise",
      contact: "Contact"
    },

    // Hero Section
    hero: {
      subtitle1: "Votre Renaissance Numérique Commence Ici",
      title: "Transformez votre entreprise avec l'Intelligence Artificielle",
      subtitle2: "Spécialistes en IA, NoCode, Automatisation & Cybersécurité. Nous donnons vie à vos projets numériques avec des solutions sur mesure.",
      stat1: {
        number: "65%",
        label: "adoptent l'IA générative"
      },
      stat2: {
        number: "+40%",
        label: "de gain de productivité"
      },
      stat3: {
        number: "22%",
        label: "de réduction des coûts"
      },
      stat4: {
        number: "24/7",
        label: "disponibilité continue"
      }
    },

    // Services Section
    services: {
      title: "Nos Services",
      subtitle: "Des solutions innovantes pour propulser votre entreprise vers le futur",

      ai: {
        title: "Intelligence Artificielle",
        description: "Développement de chatbots, analyse de données Machine Learning, et intégration d'API IA avancées.",
        list: [
          "Chatbots & Assistants IA",
          "Machine Learning & Analytique",
          "OpenAI, Cursor, Comet",
          "Programmation assistée par IA"
        ]
      },

      nocode: {
        title: "Solutions NoCode",
        description: "Création rapide d'applications web, automatisations intelligentes et workflows personnalisés.",
        list: [
          "Applications Web Rapides",
          "n8n, Make",
          "Airtable, Notion",
          "Workflows Personnalisés"
        ]
      },

      automation: {
        title: "Automatisation",
        description: "Scripts Python personnalisés, automatisation GitHub Actions, et optimisation des processus métier.",
        list: [
          "Scripts Python Sur Mesure",
          "GitHub Actions",
          "Analyse d'Affaires (CBAP)",
          "Monitoring & Alertes"
        ]
      },

      cybersecurity: {
        title: "Cybersécurité",
        description: "Audits de sécurité, tests d'intrusion, formation des équipes, et conformité RGPD.",
        list: [
          "Audits de Sécurité",
          "Tests d'Intrusion",
          "Formation des Équipes",
          "Conformité RGPD"
        ]
      },

      business: {
        title: "Business Analyse",
        description: "Analyse des besoins, gestion du backlog produit, et accompagnement au changement.",
        list: [
          "Analyse des Besoins",
          "Backlog Produit (Waterfall/Hybride/Agile)",
          "Conduite de Projet & Accompagnement au Changement"
        ]
      }
    },

    // Tech Stack Section
    techStack: {
      title: "Notre Stack Technique",
      subtitle: "Des technologies de pointe pour des solutions performantes"
    },

    // Contact Section
    contact: {
      title: "Prêt à Transformer Votre Entreprise ?",
      subtitle: "Contactez-nous pour discuter de votre projet",
      form: {
        name: "Nom Complet",
        email: "Email",
        service: "Service Souhaité",
        servicePlaceholder: "Choisir un service",
        serviceOptions: {
          ai: "Intelligence Artificielle",
          nocode: "Solutions NoCode",
          automation: "Automatisation",
          cybersecurity: "Cybersécurité",
          business: "Business Analyse",
          project: "Conduite de Projet",
          other: "Autre"
        },
        message: "Description du Projet",
        submit: "Envoyer la Demande"
      }
    },

    // Footer
    footer: {
      tagline: "Votre partenaire numérique pour renaître à l'ère de l'IA",
      sections: {
        services: "Services",
        resources: "Ressources",
        contact: "Contact"
      },
      links: {
        github: "GitHub",
        technologies: "Technologies",
        readme: "Documentation",
        email: "Email",
        linkedin: "LinkedIn"
      },
      copyright: "© 2025 The Phoenix Agency. Tous droits réservés.",
      license: "Tout contenu, code, design et structure de ce site sont protégés sous licence commerciale propriétaire. Toute reproduction, distribution ou utilisation non autorisée est strictement interdite.",
      lastUpdated: "Dernière mise à jour: 6 décembre 2025"
    },

    // Bannière Cookie
    cookie: {
      message: "Nous utilisons des cookies pour améliorer votre expérience et analyser le trafic du site.",
      accept: "Accepter",
      reject: "Refuser"
    }
  }
};

// ===================================
// GESTION DE LA LANGUE
// ===================================

let currentLang = 'fr'; // Langue par défaut : français

// Détection automatique de la langue par IP
async function detectLanguageByIP() {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();

    const frenchCountries = ['FR', 'BE', 'CH', 'LU', 'MC', 'DZ', 'MA', 'TN', 'SN', 'CI', 'ML', 'BF', 'NE', 'TD', 'GA', 'CG', 'CD', 'CM', 'MG', 'HT'];

    if (frenchCountries.includes(data.country_code)) {
      return 'fr';
    } else {
      return 'en';
    }
  } catch (error) {
    console.log('Language detection failed, using French as default');
    return 'fr';
  }
}

// Changer la langue
function changeLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('preferredLanguage', lang);
  applyTranslations();
  updateLanguageButton();

  // Update tab menu translations if it exists
  if (typeof TabMenuManager !== 'undefined' && TabMenuManager.updateTranslations) {
    TabMenuManager.updateTranslations();
  }
}

// Appliquer les traductions
function applyTranslations() {
  const t = translations[currentLang];

  // Mettre à jour l'attribut lang du HTML
  document.documentElement.lang = currentLang;

  // Navigation
  document.querySelector('[data-i18n="nav.home"]').textContent = t.nav.home;
  document.querySelector('[data-i18n="nav.services"]').textContent = t.nav.services;
  document.querySelector('[data-i18n="nav.expertise"]').textContent = t.nav.expertise;
  document.querySelector('[data-i18n="nav.contact"]').textContent = t.nav.contact;

  // Hero Section
  document.querySelector('[data-i18n="hero.subtitle1"]').textContent = t.hero.subtitle1;
  document.querySelector('[data-i18n="hero.title"]').textContent = t.hero.title;
  document.querySelector('[data-i18n="hero.subtitle2"]').textContent = t.hero.subtitle2;

  // Stats
  document.querySelector('[data-i18n="hero.stat1.number"]').textContent = t.hero.stat1.number;
  document.querySelector('[data-i18n="hero.stat1.label"]').textContent = t.hero.stat1.label;
  document.querySelector('[data-i18n="hero.stat2.number"]').textContent = t.hero.stat2.number;
  document.querySelector('[data-i18n="hero.stat2.label"]').textContent = t.hero.stat2.label;
  document.querySelector('[data-i18n="hero.stat3.number"]').textContent = t.hero.stat3.number;
  document.querySelector('[data-i18n="hero.stat3.label"]').textContent = t.hero.stat3.label;
  document.querySelector('[data-i18n="hero.stat4.number"]').textContent = t.hero.stat4.number;
  document.querySelector('[data-i18n="hero.stat4.label"]').textContent = t.hero.stat4.label;

  // Services Section
  document.querySelector('[data-i18n="services.title"]').textContent = t.services.title;
  document.querySelector('[data-i18n="services.subtitle"]').textContent = t.services.subtitle;

  // AI Card
  document.querySelector('[data-i18n="services.ai.title"]').textContent = t.services.ai.title;
  document.querySelector('[data-i18n="services.ai.description"]').textContent = t.services.ai.description;
  document.querySelectorAll('[data-i18n^="services.ai.list"]').forEach((el, i) => {
    el.textContent = t.services.ai.list[i];
  });

  // NoCode Card
  document.querySelector('[data-i18n="services.nocode.title"]').textContent = t.services.nocode.title;
  document.querySelector('[data-i18n="services.nocode.description"]').textContent = t.services.nocode.description;
  document.querySelectorAll('[data-i18n^="services.nocode.list"]').forEach((el, i) => {
    el.textContent = t.services.nocode.list[i];
  });

  // Automation Card
  document.querySelector('[data-i18n="services.automation.title"]').textContent = t.services.automation.title;
  document.querySelector('[data-i18n="services.automation.description"]').textContent = t.services.automation.description;
  document.querySelectorAll('[data-i18n^="services.automation.list"]').forEach((el, i) => {
    el.textContent = t.services.automation.list[i];
  });

  // Cybersecurity Card
  document.querySelector('[data-i18n="services.cybersecurity.title"]').textContent = t.services.cybersecurity.title;
  document.querySelector('[data-i18n="services.cybersecurity.description"]').textContent = t.services.cybersecurity.description;
  document.querySelectorAll('[data-i18n^="services.cybersecurity.list"]').forEach((el, i) => {
    el.textContent = t.services.cybersecurity.list[i];
  });

  // Business Analysis Card
  document.querySelector('[data-i18n="services.business.title"]').textContent = t.services.business.title;
  document.querySelector('[data-i18n="services.business.description"]').textContent = t.services.business.description;
  document.querySelectorAll('[data-i18n^="services.business.list"]').forEach((el, i) => {
    el.textContent = t.services.business.list[i];
  });

  // Tech Stack
  document.querySelector('[data-i18n="techStack.title"]').textContent = t.techStack.title;
  document.querySelector('[data-i18n="techStack.subtitle"]').textContent = t.techStack.subtitle;

  // Contact Section
  document.querySelector('[data-i18n="contact.title"]').textContent = t.contact.title;
  document.querySelector('[data-i18n="contact.subtitle"]').textContent = t.contact.subtitle;

  // Form Labels
  document.querySelector('[data-i18n="contact.form.name"]').textContent = t.contact.form.name;
  document.querySelector('[data-i18n="contact.form.email"]').textContent = t.contact.form.email;
  document.querySelector('[data-i18n="contact.form.service"]').textContent = t.contact.form.service;
  document.querySelector('[data-i18n="contact.form.message"]').textContent = t.contact.form.message;
  document.querySelector('[data-i18n="contact.form.submit"]').textContent = t.contact.form.submit;

  // Form Select Options
  document.querySelector('[data-i18n="contact.form.servicePlaceholder"]').textContent = t.contact.form.servicePlaceholder;
  document.querySelector('[data-i18n="contact.form.serviceOptions.ai"]').textContent = t.contact.form.serviceOptions.ai;
  document.querySelector('[data-i18n="contact.form.serviceOptions.nocode"]').textContent = t.contact.form.serviceOptions.nocode;
  document.querySelector('[data-i18n="contact.form.serviceOptions.automation"]').textContent = t.contact.form.serviceOptions.automation;
  document.querySelector('[data-i18n="contact.form.serviceOptions.cybersecurity"]').textContent = t.contact.form.serviceOptions.cybersecurity;
  document.querySelector('[data-i18n="contact.form.serviceOptions.business"]').textContent = t.contact.form.serviceOptions.business;
  document.querySelector('[data-i18n="contact.form.serviceOptions.project"]').textContent = t.contact.form.serviceOptions.project;
  document.querySelector('[data-i18n="contact.form.serviceOptions.other"]').textContent = t.contact.form.serviceOptions.other;

  // Footer
  document.querySelector('[data-i18n="footer.tagline"]').textContent = t.footer.tagline;
  document.querySelector('[data-i18n="footer.sections.services"]').textContent = t.footer.sections.services;
  document.querySelector('[data-i18n="footer.sections.resources"]').textContent = t.footer.sections.resources;
  document.querySelector('[data-i18n="footer.sections.contact"]').textContent = t.footer.sections.contact;
  document.querySelector('[data-i18n="footer.links.github"]').textContent = t.footer.links.github;
  document.querySelector('[data-i18n="footer.links.technologies"]').textContent = t.footer.links.technologies;
  document.querySelector('[data-i18n="footer.links.email"]').textContent = t.footer.links.email;
  document.querySelector('[data-i18n="footer.links.linkedin"]').textContent = t.footer.links.linkedin;
  document.querySelector('[data-i18n="footer.copyright"]').textContent = t.footer.copyright;
  document.querySelector('[data-i18n="footer.license"]').textContent = t.footer.license;
  document.querySelector('[data-i18n="footer.lastUpdated"]').textContent = t.footer.lastUpdated;

  // Cookie Banner (if exists)
  const cookieMessage = document.querySelector('[data-i18n="cookie.message"]');
  const cookieAccept = document.querySelector('[data-i18n="cookie.accept"]');
  const cookieReject = document.querySelector('[data-i18n="cookie.reject"]');
  if (cookieMessage) cookieMessage.textContent = t.cookie.message;
  if (cookieAccept) cookieAccept.textContent = t.cookie.accept;
  if (cookieReject) cookieReject.textContent = t.cookie.reject;
}

// Mettre à jour l'apparence du bouton de langue
function updateLanguageButton() {
  // Support both old langSwitcher and new langBtn
  const langBtn = document.getElementById('langBtn') || document.getElementById('langSwitcher');
  if (langBtn) {
    if (currentLang === 'fr') {
      langBtn.textContent = 'EN';
      langBtn.setAttribute('aria-label', 'Switch to English');
    } else {
      langBtn.textContent = 'FR';
      langBtn.setAttribute('aria-label', 'Passer au français');
    }
  }
}

// Basculer entre les langues
function toggleLanguage() {
  const newLang = currentLang === 'fr' ? 'en' : 'fr';
  changeLanguage(newLang);
}

// Initialisation au chargement de la page
async function initializeLanguage() {
  // Vérifier si l'utilisateur a une préférence sauvegardée
  const savedLang = localStorage.getItem('preferredLanguage');

  if (savedLang) {
    currentLang = savedLang;
  } else {
    // Détecter la langue par IP
    currentLang = await detectLanguageByIP();
    localStorage.setItem('preferredLanguage', currentLang);
  }

  applyTranslations();
  updateLanguageButton();
}

// Lancer l'initialisation quand le DOM est prêt
document.addEventListener('DOMContentLoaded', initializeLanguage);et Mac
