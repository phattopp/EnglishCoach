
// Language Dictionary
const translations = {
    de: {
        nav_home: "Home",
        nav_courses: "Kurse",
        nav_about: "Über uns",
        nav_contact: "Kontakt",
        hero_title: "Englisch Coaching für Profis",
        hero_subtitle: "Verbessern Sie Ihr Business-Englisch oder erleben Sie Abenteuer in unseren Kids Camps.",
        cta_start: "Jetzt Starten",
        services_title: "Unsere Kurse & Angebote",
        service1_title: "Business English",
        service1_desc: "Individuelles Coaching für Unternehmen und Führungskräfte. Perfektionieren Sie Ihre Verhandlungssicherheit.",
        service2_title: "English Adventure Camp",
        service2_desc: "5 Tage Action pur! Canyoning, Rafting und Englisch lernen für Kids im Mölltal.",
        service3_title: "Privatunterricht",
        service3_desc: "Maßgeschneiderter Einzelunterricht für Ihren persönlichen Erfolg und schnelle Fortschritte.",
        cta_more: "Mehr Infos",
        about_title: "Über The English Coach",
        about_text1: "Wir sind spezialisiert auf personalisiertes Tele-Coaching, Face-to-Face-Training und Seminare. Unser Ziel ist es, Ihnen die Sicherheit zu geben, die Sie auf dem internationalen Parkett benötigen.",
        about_text2: "Unser Team besteht aus erfahrenen Native Speakern, die moderne Methoden mit jahrelanger Erfahrung kombinieren.",
        cta_contact: "Kontaktieren Sie uns",
        contact_title: "Kontaktieren Sie uns",
        contact_subtitle: "Bereit für den nächsten Schritt? Wir freuen uns auf Ihre Nachricht.",
        cta_email: "Email Senden"
    },
    en: {
        nav_home: "Home",
        nav_courses: "Services",
        nav_about: "About Us",
        nav_contact: "Contact",
        hero_title: "Professional English Coaching",
        hero_subtitle: "Improve your Business English or join our Adventure Camps for Kids.",
        cta_start: "Get Started",
        services_title: "Our Services",
        service1_title: "Business English",
        service1_desc: "Individual coaching for companies and executives. Perfect your negotiation skills.",
        service2_title: "English Adventure Camp",
        service2_desc: "5 days of action! Canyoning, Rafting, and learning English for kids in Mölltal.",
        service3_title: "Private Lessons",
        service3_desc: "Tailored individual lessons for your personal success and rapid progress.",
        cta_more: "More Info",
        about_title: "About The English Coach",
        about_text1: "We specialize in personalized tele-coaching, face-to-face training, and seminars. Our goal is to give you the confidence you need on the international stage.",
        about_text2: "Our team consists of experienced native speakers who combine modern methods with years of experience.",
        cta_contact: "Contact Us",
        contact_title: "Contact Us",
        contact_subtitle: "Ready for the next step? We look forward to your message.",
        cta_email: "Send Email"
    }
};

// Language Switcher Logic
function setLanguage(lang) {
    localStorage.setItem('lang', lang);
    const elements = document.querySelectorAll('[data-key]');
    
    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.innerText.toLowerCase() === lang) {
            btn.classList.add('active');
        }
    });

    // Update text content
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang][key]) {
            element.innerText = translations[lang][key];
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Mobile Menu Logic
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});

// Close menu when clicking a link
links.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
    });
});

// Initialize Language on Load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'de';
    setLanguage(savedLang);
});
