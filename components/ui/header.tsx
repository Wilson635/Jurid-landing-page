import { Button } from "@/components/ui/button"
import { Scale } from "lucide-react"
import Link from "next/link"
const Header = () => {
    return (
        <>
            <header className="bg-card border-b border-border sticky top-0 z-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            <Link href="/" className="flex items-center gap-2">
                                <Scale className="w-8 h-8 text-primary" />
                                <span className="text-xl font-bold text-foreground">Cabinet Juridique</span>
                            </Link>
                        </div>
                        <nav className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-8">
                                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                                    Accueil
                                </Link>
                                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                                    Services
                                </Link>
                                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                                    Blog
                                </Link>
                                <Link href="/boutique" className="text-muted-foreground hover:text-primary transition-colors">
                                    Boutique
                                </Link>
                                <Link href="/apropos" className="text-foreground hover:text-primary transition-colors font-medium">
                                    À Propos
                                </Link>
                                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                                    Contact
                                </Link>
                            </div>
                        </nav>
                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Consultation Gratuite</Button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;