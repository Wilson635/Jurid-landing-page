"use client";
import Link from "next/link"
import {useTranslation} from "@/hooks/use-translation";

const navItems = [
    { href: "/apropos", label: "À propos" },
    { href: "", label: "✦" },
    { href: "/services", label: "Services" },
    { href: "", label: "✦" },
    { href: "/blog", label: "Blog" },
    /*{ href: "", label: "✦" },
    { href: "/projets", label: "Projets" },
    { href: "", label: "✦" },
    { href: "/accessoires", label: "Accessoires" },*/
]

const Footer = () => {
    const { t, language, toggleLanguage } = useTranslation()

    const getCurrentYear = () => {
        return new Date().getFullYear();
    }

    return (
        <>
            <footer className="bg-card py-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="border-t border-border mt-8 pt-8 text-left text-sm text-muted-foreground">
                        <p>&copy; {getCurrentYear()} SSII-Services. Tous droits réservés.</p>
                    </div>
                    <div className="mt-4 flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm text-muted-foreground">
                        <nav className="block">
                            <div className="flex flex-wrap items-center space-x-6 group">
                                {navItems.map((item) => {
                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className={`
                                                relative text-sm font-medium 
                                          `}
                                        >
                                            {item.label}
                                        </Link>
                                    )
                                })}
                            </div>
                        </nav>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;