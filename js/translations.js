// This file contains all translations for the website

// Import i18next and LanguageDetector
import i18next from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"

// Initialize i18next
i18next.use(LanguageDetector).init({
  detection: {
    order: ["localStorage", "navigator"],
    caches: ["localStorage"],
  },
  fallbackLng: "en",
  resources: {
    en: {
      translation: {
        nav: {
          home: "Home",
          about: "About",
          tours: "Tours",
          destinations: "Destinations",
          contact: "Contact",
          booknow: "Book Now",
        },
        hero: {
          experience: "Experience the",
          wildheart: "Wild Heart",
          of: "of",
          subtitle: "Embark on unforgettable safaris through Africa's breathtaking landscapes and wildlife.",
          startadventure: "Start Your Adventure",
          viewtours: "View Tours",
        },
        features: {
          title: "Why Choose Feel Africa Safaris?",
          guides: {
            title: "Expert Guides",
            desc: "Our knowledgeable local guides ensure authentic and safe safari adventures.",
          },
          adventures: {
            title: "Tailored Adventures",
            desc: "Customized safari itineraries to suit your dreams and interests.",
          },
          luxury: {
            title: "Luxury & Comfort",
            desc: "Experience top-notch accommodations and exceptional service.",
          },
          learnmore: "Learn more >",
        },
        packages: {
          title: "Explore Our Safari Packages",
          serengeti: {
            title: "Classic Serengeti Safari - 7 Days",
            price: "$1,990",
            desc: "Witness the Great Migration and the Big Five in the iconic Serengeti National Park.",
          },
          masaimara: {
            title: "Luxury Masai Mara Experience",
            price: "$2,450",
            desc: "Enjoy an exclusive safari in the heart of Masai Mara with luxurious accommodations.",
          },
          chobe: {
            title: "Chobe & Victoria Falls Adventure",
            price: "$3,200",
            desc: "Combine the wildlife of Chobe National Park with the spectacular Victoria Falls.",
          },
          booknow: "Book Now",
        },
        testimonials: {
          title: "What Our Guests Say",
        },
        contact: {
          title: "Get In Touch",
          name: "Name",
          email: "Email",
          message: "Message",
          send: "Send Message",
          info: "Contact Information",
          phone: "Phone",
          location: "Location",
        },
        footer: {
          desc: "Discover the adventure of Africa with Feel Africa Safaris, where authentic safari experiences meet luxury.",
          quicklinks: "Quick Links",
          packages: "Safari Packages",
          follow: "Follow Us",
          copyright: "© 2026 Feel Africa Safaris. All rights reserved.",
        },
      },
    },
    fr: {
      translation: {
        nav: {
          home: "Accueil",
          about: "À propos",
          tours: "Circuits",
          destinations: "Destinations",
          contact: "Contact",
          booknow: "Réserver maintenant",
        },
        hero: {
          experience: "Vivez l'",
          wildheart: "essence sauvage",
          of: "de l'",
          subtitle:
            "Embarquez pour des safaris inoubliables à travers les paysages et la faune époustouflants d'Afrique.",
          startadventure: "Commencez Votre Aventure",
          viewtours: "Voir les Circuits",
        },
        features: {
          title: "Pourquoi Choisir Feel Africa Safaris ?",
          guides: {
            title: "Guides Experts",
            desc: "Nos guides locaux compétents assurent des aventures de safari authentiques et sûres.",
          },
          adventures: {
            title: "Aventures Adaptées",
            desc: "Itinéraires de safari personnalisés adaptés à vos rêves et intérêts.",
          },
          luxury: {
            title: "Luxe & Confort",
            desc: "Expérience d'accommodations haut de gamme et d'un service exceptionnel.",
          },
          learnmore: "En savoir plus >",
        },
        packages: {
          title: "Explorez Nos Forfaits Safari",
          serengeti: {
            title: "Safari Serengeti Classique - 7 Jours",
            price: "$1,990",
            desc: "Témoin la Grande Migration et les Big Five dans le parc national emblématique du Serengeti.",
          },
          masaimara: {
            title: "Expérience Luxe Masai Mara",
            price: "$2,450",
            desc: "Profitez d'un safari exclusif au cœur du Masai Mara avec des accommodations luxueuses.",
          },
          chobe: {
            title: "Aventure Chobe & Chutes Victoria",
            price: "$3,200",
            desc: "Combinez la faune du Parc National de Chobe avec les spectaculaires Chutes Victoria.",
          },
          booknow: "Réserver maintenant",
        },
        testimonials: {
          title: "Avis de Nos Clients",
        },
        contact: {
          title: "Nous Contacter",
          name: "Nom",
          email: "E-mail",
          message: "Message",
          send: "Envoyer le Message",
          info: "Informations de Contact",
          phone: "Téléphone",
          location: "Localisation",
        },
        footer: {
          desc: "Découvrez l'aventure de l'Afrique avec Feel Africa Safaris, où les expériences de safari authentiques rencontrent le luxe.",
          quicklinks: "Liens Rapides",
          packages: "Forfaits Safari",
          follow: "Suivez-Nous",
          copyright: "© 2026 Feel Africa Safaris. Tous droits réservés.",
        },
      },
    },
    de: {
      translation: {
        nav: {
          home: "Startseite",
          about: "Über Uns",
          tours: "Touren",
          destinations: "Ziele",
          contact: "Kontakt",
          booknow: "Jetzt Buchen",
        },
        hero: {
          experience: "Erleben Sie das",
          wildheart: "Wilde Herz",
          of: "von",
          subtitle: "Unternehmen Sie unvergessliche Safaris durch Afrikas atemberaubende Landschaften und Tierwelt.",
          startadventure: "Starten Sie Ihr Abenteuer",
          viewtours: "Touren Ansehen",
        },
        features: {
          title: "Warum Feel Africa Safaris Wählen?",
          guides: {
            title: "Fachkundige Führer",
            desc: "Unsere sachkundigen lokalen Führer gewährleisten authentische und sichere Safariabenteuer.",
          },
          adventures: {
            title: "Maßgeschneiderte Abenteuer",
            desc: "Individualisierte Safari-Itinerare, die Ihren Träumen und Interessen entsprechen.",
          },
          luxury: {
            title: "Luxus & Komfort",
            desc: "Erleben Sie hochwertige Unterkünfte und außergewöhnlichen Service.",
          },
          learnmore: "Mehr erfahren >",
        },
        packages: {
          title: "Erkunden Sie Unsere Safari-Pakete",
          serengeti: {
            title: "Klassische Serengeti-Safari - 7 Tage",
            price: "$1,990",
            desc: "Erleben Sie die Große Migration und die Big Five im ikonischen Serengeti-Nationalpark.",
          },
          masaimara: {
            title: "Luxus-Erlebnis Masai Mara",
            price: "$2,450",
            desc: "Genießen Sie eine exklusive Safari im Herzen des Masai Mara mit luxuriösen Unterkünften.",
          },
          chobe: {
            title: "Chobe & Viktoriafälle Abenteuer",
            price: "$3,200",
            desc: "Verbinden Sie die Tierwelt des Chobe-Nationalparks mit den spektakulären Viktoriafällen.",
          },
          booknow: "Jetzt Buchen",
        },
        testimonials: {
          title: "Was Unsere Gäste Sagen",
        },
        contact: {
          title: "Kontaktieren Sie Uns",
          name: "Name",
          email: "E-Mail",
          message: "Nachricht",
          send: "Nachricht Senden",
          info: "Kontaktinformationen",
          phone: "Telefon",
          location: "Standort",
        },
        footer: {
          desc: "Entdecken Sie das Abenteuer Afrikas mit Feel Africa Safaris, wo authentische Safari-Erlebnisse auf Luxus treffen.",
          quicklinks: "Schnelllinks",
          packages: "Safari-Pakete",
          follow: "Folgen Sie Uns",
          copyright: "© 2026 Feel Africa Safaris. Alle Rechte vorbehalten.",
        },
      },
    },
    es: {
      translation: {
        nav: {
          home: "Inicio",
          about: "Acerca De",
          tours: "Tours",
          destinations: "Destinos",
          contact: "Contacto",
          booknow: "Reservar Ahora",
        },
        hero: {
          experience: "Experimenta el",
          wildheart: "Corazón Salvaje",
          of: "de",
          subtitle: "Embárcate en safaris inolvidables a través de los impresionantes paisajes y la fauna de África.",
          startadventure: "Comienza Tu Aventura",
          viewtours: "Ver Tours",
        },
        features: {
          title: "Por Qué Elegir Feel Africa Safaris?",
          guides: {
            title: "Guías Expertos",
            desc: "Nuestros guías locales expertos garantizan aventuras de safari auténticas y seguras.",
          },
          adventures: {
            title: "Aventuras Personalizadas",
            desc: "Itinerarios de safari personalizados para adaptarse a tus sueños e intereses.",
          },
          luxury: {
            title: "Lujo y Comodidad",
            desc: "Experiencia de alojamientos de primera categoría y servicio excepcional.",
          },
          learnmore: "Más información >",
        },
        packages: {
          title: "Explora Nuestros Paquetes Safari",
          serengeti: {
            title: "Safari Serengeti Clásico - 7 Días",
            price: "$1,990",
            desc: "Presencia la Gran Migración y los Cinco Grandes en el icónico Parque Nacional del Serengeti.",
          },
          masaimara: {
            title: "Experiencia Lujo Masai Mara",
            price: "$2,450",
            desc: "Disfruta de un safari exclusivo en el corazón de Masai Mara con alojamientos de lujo.",
          },
          chobe: {
            title: "Aventura Chobe y Cataratas Victoria",
            price: "$3,200",
            desc: "Combina la fauna del Parque Nacional de Chobe con las espectaculares Cataratas Victoria.",
          },
          booknow: "Reservar Ahora",
        },
        testimonials: {
          title: "Lo Que Dicen Nuestros Huéspedes",
        },
        contact: {
          title: "Ponte En Contacto",
          name: "Nombre",
          email: "Correo Electrónico",
          message: "Mensaje",
          send: "Enviar Mensaje",
          info: "Información de Contacto",
          phone: "Teléfono",
          location: "Ubicación",
        },
        footer: {
          desc: "Descubre la aventura de África con Feel Africa Safaris, donde las experiencias de safari auténticas se encuentran con el lujo.",
          quicklinks: "Enlaces Rápidos",
          packages: "Paquetes Safari",
          follow: "Síguenos",
          copyright: "© 2026 Feel Africa Safaris. Todos los derechos reservados.",
        },
      },
    },
    sw: {
      translation: {
        nav: {
          home: "Nyumbani",
          about: "Kuhusu",
          tours: "Ziara",
          destinations: "Mahali",
          contact: "Wasiliana",
          booknow: "Hifadhi Sasa",
        },
        hero: {
          experience: "Alami",
          wildheart: "Moyo Mwitu",
          of: "wa",
          subtitle: "Kaa sehemu ya safari yasiyosahauika kupitia mandhari na wanyama wa Afrika ya ajabu.",
          startadventure: "Anza Safari Yako",
          viewtours: "Angalia Ziara",
        },
        features: {
          title: "Kwa Nini Chagua Feel Africa Safaris?",
          guides: {
            title: "Waongezi Wenye Ujinga",
            desc: "Waongezi wetu wa ndani wenye ujinga wanahakikisha safari asilia na salama.",
          },
          adventures: {
            title: "Safari Zilizorekebishwa",
            desc: "Njia za safari iliyokamatia mahitaji yako na maslahi yako.",
          },
          luxury: {
            title: "Alafu na Starehe",
            desc: "Alami makazi ya juu na huduma ya kipekee.",
          },
          learnmore: "Jifunze zaidi >",
        },
        packages: {
          title: "Kumbuka Safari Zetu",
          serengeti: {
            title: "Safari Serengeti Moja - Siku 7",
            price: "$1,990",
            desc: "Kuona Kugombana Kubwa na Wanyama Watano katika Serengeti.",
          },
          masaimara: {
            title: "Uzuri Masai Mara",
            price: "$2,450",
            desc: "Peke yako safari ya kipekee katikati ya Masai Mara na makazi mazuri.",
          },
          chobe: {
            title: "Chobe & Victoria Majanga",
            price: "$3,200",
            desc: "Unganisha wanyama wa Chobe na Victoria Majanga ya ajabu.",
          },
          booknow: "Hifadhi Sasa",
        },
        testimonials: {
          title: "Wageni Wanasema Nini",
        },
        contact: {
          title: "Wasiliana Nasi",
          name: "Jina",
          email: "Barua Pepe",
          message: "Ujumbe",
          send: "Tuma Ujumbe",
          info: "Maelezo ya Kuwasiliana",
          phone: "Simu",
          location: "Mahali",
        },
        footer: {
          desc: "Kumbuka safari ya Afrika na Feel Africa Safaris, mahali ambapo safari halisi hukutana na alafu.",
          quicklinks: "Kiungo Haraka",
          packages: "Safari Zetu",
          follow: "Tunikute",
          copyright: "© 2026 Feel Africa Safaris. Haki zote zimehifadhiwa.",
        },
      },
    },
  },
})

// Localize all elements with data-i18n attribute
function updateLocalization() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n")
    element.textContent = i18next.t(key)
  })

  // Update language button text
  const langMap = {
    en: "English",
    fr: "Français",
    de: "Deutsch",
    es: "Español",
    sw: "Kiswahili",
  }
  document.getElementById("currentLanguage").textContent = langMap[i18next.language] || "English"
  document.documentElement.lang = i18next.language
}

// Initialize localization on page load
document.addEventListener("DOMContentLoaded", updateLocalization)

// Export for main.js
window.updateLocalization = updateLocalization
