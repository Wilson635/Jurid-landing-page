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

        // Page À propos
        about: {
            hero: {
                name: "Maître NOFFE",
                subtitle: "Avocate inscrite aux barreaux du Cameroun et du Nigeria, spécialisée en droit des affaires et en droit des sociétés. Depuis 2014, elle accompagne entreprises et investisseurs sur les mécanismes juridiques, la conformité règlementaire et la gouvernance.",
                badges: {
                    business: "Droit des Affaires",
                    corporate: "Droit des Sociétés",
                    compliance: "Compliance",
                    governance: "Corporate Governance",
                    landLaw: "Droit Foncier & Immobilier"
                },
                ctaAppointment: "Prendre Rendez-vous",
                ctaContact: "Me Contacter",
                experience: "Années d'expérience"
            },
            journey: {
                title: "Mon Parcours",
                paragraph1: "Depuis 2014, j'ai choisi de me spécialiser en droit des affaires et en droit des sociétés, avec un intérêt particulier pour les mécanismes juridiques liés au financement et à la sécurisation des investissements. Mon expertise couvre également la conformité règlementaire et administrative des entreprises, le corporate secretarial services, la gestion des contrats, l'audit juridique, ainsi que la résolution des litiges.",
                paragraph2: "Avocate inscrite aux barreaux du Cameroun et du Nigeria, je possède une double maîtrise du système de la Common Law et du Droit Civil français. Je conseille entreprises et institutions sur des sujets stratégiques de gouvernance et j'ai récemment lancé le podcast \"Le guide des entreprises\", dédié aux dirigeants et entrepreneurs.",
                paragraph3: "Parallèlement, j'élargis mes compétences dans le domaine du droit foncier, du droit immobilier et du leasing (crédit-bail), avec une formation en gestion de projets (certification PMP en cours). Ces expériences me permettent d'apporter une approche transversale et pragmatique aux problématiques juridiques et économiques de mes clients.",
                paragraph4: "Ma mission est claire : offrir aux entreprises un accompagnement juridique de haut niveau, transformant la complexité réglementaire en leviers de croissance durable."
            },
            values: {
                title: "Mes Valeurs",
                subtitle: "Les principes qui guident mon approche professionnelle au quotidien"
            },
            experience: {
                title: "Expérience Professionnelle"
            },
            education: {
                title: "Formation",
                certifications: "Certifications & Formations"
            },
            testimonials: {
                title: "Témoignages Clients",
                subtitle: "Ce que disent mes clients de notre collaboration"
            }
        },

        // Page Services
        services: {
            hero: {
                title: "Nos",
                titleHighlight: "Services Juridiques",
                subtitle: "Une expertise complète dans tous les domaines du droit pour accompagner vos projets personnels et professionnels avec excellence."
            },
            expertises: "Nos expertises :",
            learnMore: "En savoir plus",
            cards: {
                consultation: {
                    title: "Consultation Juridique",
                    description: "Conseils personnalisés et expertise juridique complète pour tous vos besoins",
                    items: [
                        "Rédaction des contrats",
                        "Création des entreprises",
                        "Information juridique documentaire",
                        "Conformité & Ingénierie juridique"
                    ]
                },
                corporate: {
                    title: "Droit des Sociétés",
                    description: "Accompagnement dans la création, gestion et développement de votre entreprise",
                    items: [
                        "Constitution de sociétés",
                        "Gouvernance d'entreprise",
                        "Fusions & acquisitions",
                        "Restructurations"
                    ]
                },
                financial: {
                    title: "Droit Financier & Bancaire",
                    description: "Expertise en matière financière, bancaire et d'investissement",
                    items: [
                        "Droit bancaire",
                        "Crédit bail",
                        "Investissements",
                        "Droit boursier"
                    ]
                },
                landLaw: {
                    title: "Droit Foncier",
                    description: "Transactions immobilières et expertise foncière complète",
                    items: [
                        "Acquisitions immobilières",
                        "Baux commerciaux",
                        "Urbanisme",
                        "Contentieux foncier"
                    ]
                }
            },
            cta: {
                title: "Une Question Juridique ?",
                subtitle: "Nos experts sont à votre disposition pour vous conseiller",
                freeConsultation: "Consultation Gratuite",
                contactUs: "Nous Contacter"
            }
        },

        // Page Blog
        blog: {
            hero: {
                title: "Blog",
                titleHighlight: "Juridique",
                subtitle: "Actualités, conseils pratiques et analyses juridiques pour vous accompagner dans vos décisions",
                searchPlaceholder: "Rechercher un article..."
            },
            sidebar: {
                categories: "Catégories",
                popularArticles: "Articles Populaires",
                allArticles: "Tous les articles"
            },
            article: {
                readTime: "de lecture",
                by: "Par"
            },
            actions: {
                loadMore: "Charger plus d'articles"
            },
            newsletter: {
                title: "Restez Informé",
                subtitle: "Recevez nos derniers articles et analyses juridiques directement dans votre boîte mail",
                emailPlaceholder: "Votre adresse email",
                subscribe: "S'abonner"
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

        // About page
        about: {
            hero: {
                name: "Attorney NOFFE",
                subtitle: "Lawyer registered at the Cameroon and Nigeria bars, specialized in business law and corporate law. Since 2014, she has been supporting companies and investors in legal mechanisms, regulatory compliance and governance.",
                badges: {
                    business: "Business Law",
                    corporate: "Corporate Law",
                    compliance: "Compliance",
                    governance: "Corporate Governance",
                    landLaw: "Land & Real Estate Law"
                },
                ctaAppointment: "Schedule Appointment",
                ctaContact: "Contact Me",
                experience: "Years of experience"
            },
            journey: {
                title: "My Journey",
                paragraph1: "Since 2014, I have chosen to specialize in business law and corporate law, with a particular interest in legal mechanisms related to financing and securing investments. My expertise also covers regulatory and administrative compliance for companies, corporate secretarial services, contract management, legal audits, and dispute resolution.",
                paragraph2: "As a lawyer registered at the bars of Cameroon and Nigeria, I have a dual mastery of the Common Law system and French Civil Law. I advise companies and institutions on strategic governance issues and recently launched the podcast \"The Business Guide\", dedicated to leaders and entrepreneurs.",
                paragraph3: "At the same time, I am expanding my skills in land law, real estate law and leasing, with training in project management (PMP certification in progress). These experiences allow me to bring a cross-functional and pragmatic approach to the legal and economic challenges of my clients.",
                paragraph4: "My mission is clear: to provide companies with high-level legal support, transforming regulatory complexity into drivers of sustainable growth."
            },
            values: {
                title: "My Values",
                subtitle: "The principles that guide my professional approach daily"
            },
            experience: {
                title: "Professional Experience"
            },
            education: {
                title: "Education",
                certifications: "Certifications & Training"
            },
            testimonials: {
                title: "Client Testimonials",
                subtitle: "What my clients say about our collaboration"
            }
        },

        // Services page
        services: {
            hero: {
                title: "Our",
                titleHighlight: "Legal Services",
                subtitle: "Complete expertise in all areas of law to support your personal and professional projects with excellence."
            },
            expertises: "Our expertise:",
            learnMore: "Learn more",
            cards: {
                consultation: {
                    title: "Legal Consultation",
                    description: "Personalized advice and comprehensive legal expertise for all your needs",
                    items: [
                        "Contract drafting",
                        "Business formation",
                        "Legal documentary information",
                        "Compliance & Legal engineering"
                    ]
                },
                corporate: {
                    title: "Corporate Law",
                    description: "Support in the creation, management and development of your company",
                    items: [
                        "Company formation",
                        "Corporate governance",
                        "Mergers & acquisitions",
                        "Restructuring"
                    ]
                },
                financial: {
                    title: "Financial & Banking Law",
                    description: "Expertise in financial, banking and investment matters",
                    items: [
                        "Banking law",
                        "Leasing",
                        "Investments",
                        "Securities law"
                    ]
                },
                landLaw: {
                    title: "Land Law",
                    description: "Real estate transactions and comprehensive land expertise",
                    items: [
                        "Real estate acquisitions",
                        "Commercial leases",
                        "Urban planning",
                        "Land disputes"
                    ]
                }
            },
            cta: {
                title: "A Legal Question?",
                subtitle: "Our experts are at your disposal to advise you",
                freeConsultation: "Free Consultation",
                contactUs: "Contact Us"
            }
        },

        // Blog page
        blog: {
            hero: {
                title: "Legal",
                titleHighlight: "Blog",
                subtitle: "News, practical advice and legal analysis to support you in your decisions",
                searchPlaceholder: "Search for an article..."
            },
            sidebar: {
                categories: "Categories",
                popularArticles: "Popular Articles",
                allArticles: "All articles"
            },
            article: {
                readTime: "read",
                by: "By"
            },
            actions: {
                loadMore: "Load more articles"
            },
            newsletter: {
                title: "Stay Informed",
                subtitle: "Receive our latest articles and legal analysis directly in your inbox",
                emailPlaceholder: "Your email address",
                subscribe: "Subscribe"
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