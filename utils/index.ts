import {Heart, Scale, Users} from "lucide-react";

const education = [
    {
        degree: "Barrister and Solicitors Training",
        institution: "Nigeria Law School, Abuja",
        year: "—",
        mention: "",
    },
    {
        degree: "Master en Contentieux et Arbitrage des Affaires",
        institution: "Université Catholique d’Afrique Centrale",
        year: "—",
        mention: "",
    },
    {
        degree: "Master in Business Law",
        institution: "Université de Yaoundé II, SOA",
        year: "—",
        mention: "",
    },
    {
        degree: "Bachelor of Laws (LL.B), Common Law",
        institution: "University of Buea",
        year: "—",
        mention: "",
    },
]

const experience = [
    {
        position: "Avocate inscrite",
        company: "Barreau du Cameroun et du Nigeria",
        period: "2014 - Présent",
        description:
            "Spécialisée en droit des affaires, droit des sociétés et gouvernance d’entreprise, avec un intérêt particulier pour les investissements, la conformité réglementaire et la gestion contractuelle.",
    },
    {
        position: "Fondatrice & Responsable",
        company: "Podcast « Le Guide des Entreprises »",
        period: "2023 - Présent",
        description:
            "Création et animation d’un podcast dédié à l’accompagnement des entreprises sur les enjeux juridiques et de gouvernance.",
    },
    {
        position: "Consultante Juridique",
        company: "GECEFIC FINANCE S.A (Audit Juridique)",
        period: "—",
        description:
            "Coordination d’une mission d’audit juridique pour une institution de microfinance de 2ème catégorie.",
    },
    {
        position: "Mandataire",
        company: "General Electric Cameroon",
        period: "—",
        description:
            "Représentation juridique et conseil pour la structuration et la sécurisation des opérations locales.",
    },
]

const certifications = [
    "PMP Certification (en cours)",
    "Certificat d’achèvement – Passation des marchés financés par l’AFD",
    "Disputes Resolution Certificate, Settlement House Abuja",
    "Expertise confirmée en ADR, litigation management, consensus building",
]

const projets = [
    {
        title: "Investissement & Financement",
        description:
            "Contribution à la négociation d’accords de financement avec la BDEAC pour DUVAAL HOLDING SAS.",
    },
    {
        title: "Acquisitions industrielles",
        description:
            "Participation aux négociations pour l’acquisition d’une usine de transformation de cacao chez BUHLER, pour NEO INDUSTRY S.A et ATLANTIC COCOA Plc.",
    },
]

const services = [
    "Legal Process Outsourcing",
    "Contract Management",
    "IMMOCARE (Real Estate Acquisition Due Diligence)",
    "Compliance",
    "Corporate Secretarial Services (Secrétariat d’Entreprises)",
]


const values = [
    {
        icon: Heart,
        title: "Proximité Client",
        description: "Une relation de confiance basée sur l'écoute et la compréhension de vos enjeux spécifiques.",
    },
    {
        icon: Scale,
        title: "Excellence Juridique",
        description: "Une expertise pointue et une veille juridique permanente pour vous offrir les meilleurs conseils.",
    },
    {
        icon: Users,
        title: "Accompagnement Personnalisé",
        description: "Des solutions sur mesure adaptées à votre situation et à vos objectifs d'entreprise.",
    },
]

const testimonials = [
    {
        content:
            "Maître Martin nous a accompagnés dans la création de notre SAS avec un professionnalisme exemplaire. Ses conseils ont été précieux pour structurer notre entreprise.",
        author: "Pierre Dubois",
        company: "CEO, TechStart",
        rating: 5,
    },
    {
        content:
            "Une expertise remarquable en droit financier. Grâce à ses conseils, nous avons pu optimiser notre structure de financement et éviter de nombreux écueils.",
        author: "Marie Lecomte",
        company: "Directrice Financière, InnovCorp",
        rating: 5,
    },
    {
        content:
            "Réactivité, compétence et bienveillance. Maître Martin a su nous guider dans un dossier complexe de fusion avec une approche très professionnelle.",
        author: "Jean-Luc Moreau",
        company: "Président, Groupe Expansion",
        rating: 5,
    },
]

export {
    education,
    experience,
    certifications,
    projets,
    services,
    values,
    testimonials
};