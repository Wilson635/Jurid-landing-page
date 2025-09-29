import {
    Scale,
    Phone,
    Mail,
    MapPin,
} from "lucide-react"
import Link from "next/link"

const Footer = () => {

    const getCurrentYear = () => {
        return new Date().getFullYear();
    }

    return (
        <>
            <footer className="bg-card border-t border-border py-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <Scale className="w-6 h-6 text-primary" />
                                <span className="text-lg font-bold text-foreground">Cabinet Juridique</span>
                            </div>
                            <p className="text-muted-foreground text-sm">
                                Votre partenaire juridique de confiance pour tous vos besoins professionnels et personnels.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-4">Services</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>
                                    <Link href="#" className="hover:text-primary transition-colors">
                                        Consultation juridique
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-primary transition-colors">
                                        Droit des sociétés
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-primary transition-colors">
                                        Droit financier
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-primary transition-colors">
                                        Droit foncier
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-4">Ressources</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>
                                    <Link href="#" className="hover:text-primary transition-colors">
                                        Blog juridique
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-primary transition-colors">
                                        Boutique
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-primary transition-colors">
                                        Assistant IA
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-primary transition-colors">
                                        À propos
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
                            <div className="space-y-2 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <Phone className="w-4 h-4" />
                                    <span>+33 1 23 45 67 89</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Mail className="w-4 h-4" />
                                    <span>contact@cabinet-juridique.fr</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4" />
                                    <span>Paris, France</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
                        <p>&copy; {getCurrentYear()} SSII-Services. Tous droits réservés.</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;