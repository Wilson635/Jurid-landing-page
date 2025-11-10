"use client"

import Link from "next/link"
import {usePathname} from "next/navigation"
import {Instagram, Linkedin, Moon, Scale, Sun, Twitter, Youtube,} from "lucide-react"
import {useTheme} from "@/hooks/use-theme";
import {Button} from "@/components/ui/button";

const navItems = [
    {href: "/apropos", label: "À propos"},
    {href: "/services", label: "Services"},
    {href: "/blog", label: "Blog"},
    {href: "/projets", label: "Projets"},
    {href: "/accessoires", label: "Accessoires"},
]

const socialLinks = [
    {href: "https://x.com", icon: Twitter, color: "#1DA1F2"},
    {href: "https://linkedin.com", icon: Linkedin, color: "#0A66C2"},
    {href: "https://instagram.com", icon: Instagram, color: "#E4405F"},
    {href: "https://youtube.com", icon: Youtube, color: "#FF0000"},
]

const Header = () => {
    const pathname = usePathname()

    const { theme, toggleTheme, mounted } = useTheme()

    if (!mounted) return null

    return (
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
            <div className="container mx-auto flex items-center justify-between px-6 h-16">

                {/* Avatar / Logo */}
                <div className="flex items-center">
                    <Link href="/" className="border p-1">
                        <Scale className="w-8 h-8 text-primary p-2  bg-primary/10"/>
                    </Link>
                </div>

                {/* Navigation */}
                <div className="p-[1px] w-fit mx-auto">
                    <nav className="hidden border md:block">
                        <div className="items-center px-4 py-2.5">
                            <div className="flex items-center space-x-6 group">
                                {navItems.map((item) => {
                                    const isActive = pathname === item.href
                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className={`
                                              relative text-sm font-medium transition-all duration-300
                                              hover:blur-none
                                              group-hover:blur-[2px] 
                                              ${isActive
                                                ? "text-black dark:text-blue-400 after:content-[''] after:absolute after:left-0 after:-bottom-2.5 after:h-[1px] after:w-full after:bg-gradient-to-r after:from-black/10 after:via-black after:to-black/10 dark:after:from-blue-400/10 dark:after:via-blue-400 dark:after:to-blue-400/10"
                                                : "text-muted-foreground hover:text-primary"}
                                            `}
                                        >
                                            {item.label}
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    </nav>
                </div>

                {/* Socials + Actions */}
                <div className="flex items-center gap-4">
                    {socialLinks.map(({href, icon: Icon}) => (
                        <Link
                            key={href}
                            href={href}
                            target="_blank"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Icon className="w-5 h-5"/>
                        </Link>
                    ))}
                    <Link
                        href="mailto:contact@exemple.com"
                        className="px-3 py-2.5 border text-sm hover:bg-accent transition"
                    >
                        Par Mail
                    </Link>
                    <Button
                        variant="outline"
                        className="p-5 rounded-none"
                        onClick={toggleTheme}
                        title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
                    >
                        {theme === "light" ? <Moon className="h-6 w-6 " /> : <Sun className="h-6 w-6" />}
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default Header
