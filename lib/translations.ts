// ==============================================
// Fichier 2: /lib/translations.ts
// ==============================================

export const translations = {
    fr: {
        // Commun
        welcome: "Bienvenue",
        backToDashboard: "Retour au tableau de bord",
        backToSite: "Revenir sur le site",
        logout: "Déconnexion",
        switchToDark: "Mode sombre",
        switchToLight: "Mode clair",
        switchToEnglish: "Switch to English",
        switchToFrench: "Passer en Français",
        save: "Enregistrer",
        cancel: "Annuler",
        delete: "Supprimer",
        edit: "Modifier",

        // Page d'accueil
        home: {
            hero: {
                title: "Votre",
                titleHighlight: "Expert Juridique",
                titleEnd: "de Confiance",
                subtitle: "Consultation juridique, création d'entreprises, rédaction de contrats et bien plus. Bénéficiez d'un accompagnement professionnel pour tous vos besoins juridiques.",
                ctaPrimary: "Consultation Immédiate",
                ctaSecondary: "Nos Services",
                experience: "10+ ans d'expérience",
                clients: "500+ clients satisfaits",
                domains: "Tous domaines juridiques",
            },
            services: {
                title: "Nos Domaines d'Expertise",
                subtitle: "Un accompagnement complet dans tous vos projets juridiques",
                learnMore: "En savoir plus",

                consultation: {
                    title: "Consultation Juridique",
                    description: "Conseils personnalisés et expertise juridique complète",
                    items: [
                        "Rédaction des contrats",
                        "Création des entreprises",
                        "Information juridique documentaire",
                        "Conformité & Ingénierie juridique"
                    ]
                },
                corporate: {
                    title: "Droit des Sociétés",
                    description: "Accompagnement dans la vie de votre entreprise",
                    items: [
                        "Constitution de sociétés",
                        "Gouvernance d'entreprise",
                        "Fusions & acquisitions",
                        "Restructurations"
                    ]
                },
                financial: {
                    title: "Droit Financier",
                    description: "Expertise en matière financière et bancaire",
                    items: [
                        "Droit bancaire",
                        "Crédit bail",
                        "Investissements",
                        "Droit boursier"
                    ]
                },
                landLaw: {
                    title: "Droit Foncier",
                    description: "Transactions immobilières et foncières",
                    items: [
                        "Acquisitions immobilières",
                        "Baux commerciaux",
                        "Urbanisme",
                        "Contentieux foncier"
                    ]
                },
                blog: {
                    title: "Articles & Actualités",
                    description: "Restez informé des évolutions juridiques",
                    content: "Découvrez nos analyses juridiques et conseils pratiques",
                    cta: "Lire le blog"
                },
                shop: {
                    title: "Boutique Juridique",
                    description: "Documents et formations juridiques",
                    content: "Modèles de contrats, guides pratiques et formations",
                    cta: "Voir la boutique"
                }
            },
            cta: {
                title: "Besoin d'un Conseil Juridique ?",
                subtitle: "Contactez-nous dès aujourd'hui pour une consultation personnalisée",
                call: "Appeler Maintenant",
                email: "Envoyer un Email"
            }
        },

        // Dashboard
        dashboard: {
            title: "Bienvenue",
            subtitle: "Gérez votre contenu et suivez l'activité de votre cabinet juridique depuis votre tableau de bord",
            articlesTotal: "Articles total",
            published: "Publiés",
            requests: "Demandes",
            statistics: "Statistiques",
            articles: "Articles",
            totalCreated: "Total créés",
            consultations: "Consultations",
            pending: "En attente",
            activity: "Activité",
            totalActions: "Total actions",
            thisMonth: "Ce mois",
            contentManagement: "Gestion du Contenu",
            articlesManagement: "Gestion des Articles",
            articlesManagementDesc: "Créer, éditer, supprimer ou publier les articles du blog juridique",
            manageArticles: "Gérer les Articles →",
            consultationRequests: "Demandes de Consultation",
            consultationRequestsDesc: "Consulter et gérer les demandes reçues depuis les formulaires du site",
            viewRequests: "Voir les Demandes →",
            processed: "traitées",
            quickActions: "Actions Rapides",
            quickActionsDesc: "Accédez rapidement aux fonctionnalités principales",
            newArticle: "Nouvel Article",
            viewBlog: "Voir le Blog",
        },

        // Articles
        articles: {
            title: "Gestion des Articles",
            subtitle: "Créez, modifiez et publiez vos articles de blog juridique en toute simplicité",
            newArticle: "Nouvel Article",
            total: "Articles total",
            publisheds: "Publiés",
            drafts: "Brouillons",
            articlesPublished: "Articles publiés",
            noArticles: "Aucun article créé pour le moment",
            noArticlesDesc: "Commencez par créer votre premier article",
            createArticle: "Créer un nouvel article",
            editArticle: "Modifier l'article",
            deleteConfirm: "Êtes-vous sûr de vouloir supprimer cet article ?",
            coverImage: "Image de couverture",
            clickToUpload: "Cliquez pour télécharger une image",
            imageFormat: "PNG, JPG jusqu'à 5MB",
            remove: "Supprimer",
            titles: "Titre",
            required: "*",
            titlePlaceholder: "Titre accrocheur de l'article",
            excerpt: "Extrait",
            excerptPlaceholder: "Résumé court qui apparaîtra dans la liste des articles",
            content: "Contenu",
            contentPlaceholder: "Contenu complet de l'article (HTML supporté)",
            useToolbar: "💡 Utilisez la barre d'outils pour formater votre texte",
            category: "Catégorie",
            date: "Date",
            author: "Auteur",
            readTime: "Temps de lecture",
            publishImmediately: "Publier cet article immédiatement",
            createButton: "Créer l'article",
            updateButton: "Mettre à jour",
            url: "URL",
            published: "Publié",
            draft: "Brouillon",
            hide: "Masquer",
            show: "Publier",
            modifyArticle: "Modifier l'article →",
            fillRequired: "Veuillez remplir tous les champs obligatoires",
            categories: {
                practical: "Conseils pratiques",
                corporate: "Droit des sociétés",
                financial: "Droit financier",
                news: "Actualités juridiques",
            },
        },

        // Consultations
        consultations: {
            title: "Demandes de Consultation",
            subtitle: "Gérez et suivez toutes les demandes reçues de tous les services",
            totalRequests: "Total demandes",
            pending: "En attente",
            processed: "Traitées",
            status: "Statut",
            all: "Toutes",
            service: "Service",
            allServices: "Tous les services",
            noRequests: "Aucune demande trouvée",
            noRequestsDesc: "Aucune demande ne correspond aux filtres sélectionnés",
            markProcessed: "Marquer traité",
            deleteConfirm: "Êtes-vous sûr de vouloir supprimer cette demande ?",
            consultationType: "Type de consultation",
            expertiseArea: "Domaine d'expertise",
            email: "Email",
            phone: "Téléphone",
            requestDescription: "Description de la demande",
            services: {
                consultation: "Consultation Juridique",
                financial: "Droit Financier & Bancaire",
                landLaw: "Droit Foncier",
                corporate: "Droit des Sociétés",
                other: "Autre",
            },
        },

        // Footer
        footer: {
            rights: "Tous droits réservés.",
            navigation: {
                about: "À propos",
                services: "Services",
                blog: "Blog",
            }
        },
    },

    en: {
        // Common
        welcome: "Welcome",
        backToDashboard: "Back to dashboard",
        backToSite: "Back to website",
        logout: "Logout",
        switchToDark: "Dark mode",
        switchToLight: "Light mode",
        switchToEnglish: "Switch to English",
        switchToFrench: "Passer en Français",
        save: "Save",
        cancel: "Cancel",
        delete: "Delete",
        edit: "Edit",

        // Home page
        home: {
            hero: {
                title: "Your Trusted",
                titleHighlight: "Legal Expert",
                titleEnd: " ",
                subtitle: "Legal consultation, business formation, contract drafting and more. Benefit from professional support for all your legal needs.",
                ctaPrimary: "Immediate Consultation",
                ctaSecondary: "Our Services",
                experience: "10+ years of experience",
                clients: "500+ satisfied clients",
                domains: "All legal domains",
            },
            services: {
                title: "Our Areas of Expertise",
                subtitle: "Complete support for all your legal projects",
                learnMore: "Learn more",

                consultation: {
                    title: "Legal Consultation",
                    description: "Personalized advice and comprehensive legal expertise",
                    items: [
                        "Contract drafting",
                        "Business formation",
                        "Legal documentary information",
                        "Compliance & Legal engineering"
                    ]
                },
                corporate: {
                    title: "Corporate Law",
                    description: "Support throughout your company's lifecycle",
                    items: [
                        "Company formation",
                        "Corporate governance",
                        "Mergers & acquisitions",
                        "Restructuring"
                    ]
                },
                financial: {
                    title: "Financial Law",
                    description: "Expertise in financial and banking matters",
                    items: [
                        "Banking law",
                        "Leasing",
                        "Investments",
                        "Securities law"
                    ]
                },
                landLaw: {
                    title: "Land Law",
                    description: "Real estate and land transactions",
                    items: [
                        "Real estate acquisitions",
                        "Commercial leases",
                        "Urban planning",
                        "Land disputes"
                    ]
                },
                blog: {
                    title: "Articles & News",
                    description: "Stay informed about legal developments",
                    content: "Discover our legal analysis and practical advice",
                    cta: "Read the blog"
                },
                shop: {
                    title: "Legal Shop",
                    description: "Legal documents and training",
                    content: "Contract templates, practical guides and training",
                    cta: "View the shop"
                }
            },
            cta: {
                title: "Need Legal Advice?",
                subtitle: "Contact us today for a personalized consultation",
                call: "Call Now",
                email: "Send an Email"
            }
        },

        // Dashboard
        dashboard: {
            title: "Welcome",
            subtitle: "Manage your content and track your law firm's activity from your dashboard",
            articlesTotal: "Total articles",
            published: "Published",
            requests: "Requests",
            statistics: "Statistics",
            articles: "Articles",
            totalCreated: "Total created",
            consultations: "Consultations",
            pending: "Pending",
            activity: "Activity",
            totalActions: "Total actions",
            thisMonth: "This month",
            contentManagement: "Content Management",
            articlesManagement: "Articles Management",
            articlesManagementDesc: "Create, edit, delete or publish legal blog articles",
            manageArticles: "Manage Articles →",
            consultationRequests: "Consultation Requests",
            consultationRequestsDesc: "View and manage requests received from website forms",
            viewRequests: "View Requests →",
            processed: "processed",
            quickActions: "Quick Actions",
            quickActionsDesc: "Quickly access main features",
            newArticle: "New Article",
            viewBlog: "View Blog",
        },

        // Articles
        articles: {
            title: "Articles Management",
            subtitle: "Create, edit and publish your legal blog articles with ease",
            newArticle: "New Article",
            total: "Total articles",
            publisheds: "Published",
            drafts: "Drafts",
            articlesPublished: "Published articles",
            noArticles: "No articles created yet",
            noArticlesDesc: "Start by creating your first article",
            createArticle: "Create a new article",
            editArticle: "Edit article",
            deleteConfirm: "Are you sure you want to delete this article?",
            coverImage: "Cover image",
            clickToUpload: "Click to upload an image",
            imageFormat: "PNG, JPG up to 5MB",
            remove: "Remove",
            titles: "Title",
            required: "*",
            titlePlaceholder: "Catchy article title",
            excerpt: "Excerpt",
            excerptPlaceholder: "Short summary that will appear in the articles list",
            content: "Content",
            contentPlaceholder: "Full article content (HTML supported)",
            useToolbar: "💡 Use the toolbar to format your text",
            category: "Category",
            date: "Date",
            author: "Author",
            readTime: "Reading time",
            publishImmediately: "Publish this article immediately",
            createButton: "Create article",
            updateButton: "Update",
            url: "URL",
            published: "Published",
            draft: "Draft",
            hide: "Hide",
            show: "Publish",
            modifyArticle: "Edit article →",
            fillRequired: "Please fill in all required fields",
            categories: {
                practical: "Practical advice",
                corporate: "Corporate law",
                financial: "Financial law",
                news: "Legal news",
            },
        },

        // Consultations
        consultations: {
            title: "Consultation Requests",
            subtitle: "Manage and track all requests received from all services",
            totalRequests: "Total requests",
            pending: "Pending",
            processed: "Processed",
            status: "Status",
            all: "All",
            service: "Service",
            allServices: "All services",
            noRequests: "No requests found",
            noRequestsDesc: "No requests match the selected filters",
            markProcessed: "Mark as processed",
            deleteConfirm: "Are you sure you want to delete this request?",
            consultationType: "Consultation type",
            expertiseArea: "Area of expertise",
            email: "Email",
            phone: "Phone",
            requestDescription: "Request description",
            services: {
                consultation: "Legal Consultation",
                financial: "Financial & Banking Law",
                landLaw: "Land Law",
                corporate: "Corporate Law",
                other: "Other",
            },
        },

        // Footer
        footer: {
            rights: "All rights reserved",
            navigation: {
                about: "About",
                services: "Services",
                blog: "Blog",
            }
        },
    },
}

export type TranslationKey = keyof typeof translations.fr