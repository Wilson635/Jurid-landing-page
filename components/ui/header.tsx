"use client"

import Link from "next/link"
import {usePathname} from "next/navigation"
import {Instagram, Languages, Linkedin, Menu, Moon, Scale, Sun, Twitter, Youtube,} from "lucide-react"
import {useTheme} from "@/hooks/use-theme";
import {Button} from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {useTranslation} from "@/hooks/use-translation";

const navItems = [
    {href: "/apropos", label: "À propos"},
    {href: "/services", label: "Services"},
    {href: "/blog", label: "Blog"},
    /*{href: "/projets", label: "Projets"},
    {href: "/accessoires", label: "Accessoires"},*/
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
    const { t, language, toggleLanguage } = useTranslation()

    if (!mounted) return null

    return (
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
            <div className="container mx-auto flex items-center justify-between px-6 h-16">

                {/* Avatar / Logo */}
                <div className="flex items-center">
                    <Link href="/" className="border rounded-md p-1">
                        <Scale className="w-8 h-8 text-primary p-2 rounded-md bg-primary/10"/>
                    </Link>
                </div>

                {/* Navigation */}
                <div className="p-[1px] w-fit mx-auto flex items-center">
                    {/* Desktop Navigation */}
                    <nav className="hidden border rounded-md md:block">
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

                <div className="hidden md:block mr-4">
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
                            className="px-3 py-2.5 border rounded-md text-sm hover:bg-accent transition"
                        >
                            Par Mail
                        </Link>
                    </div>
                </div>

                {/* Socials + Actions */}
                <div className="flex items-center gap-4">

                    {/*  Toggle Theme */}
                    <Button
                        variant="outline"
                        className="p-5 rounded-md"
                        onClick={toggleTheme}
                        title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
                    >
                        {theme === "light" ? <Moon className="h-6 w-6 " /> : <Sun className="h-6 w-6" />}
                    </Button>

                    {/* Toggle Translation */}
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={toggleLanguage}
                        className="border-border p-5"
                        title={language === "fr" ? t.switchToEnglish : t.switchToFrench}
                    >
                        <Languages className="h-4 w-4 mr-1" />
                        <span className="font-semibold text-xs">{language === "fr" ? "EN" : "FR"}</span>
                    </Button>


                    {/* Mobile Navigation */}
                    <nav className="md:hidden block">
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Button className="p-5 rounded-md">
                                    <Menu className="h-5 w-5" />
                                    <span className="sr-only">Ouvrir le menu</span>
                                </Button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent align="end" className="w-48 z-50">
                                <DropdownMenuLabel>Navigation</DropdownMenuLabel>
                                <DropdownMenuSeparator />

                                {navItems.map((item) => {
                                    const isActive = pathname === item.href
                                    return (
                                        <Link key={item.href} href={item.href}>
                                            <DropdownMenuItem
                                                className={`cursor-pointer ${
                                                    isActive
                                                        ? 'bg-accent text-accent-foreground font-semibold'
                                                        : ''
                                                }`}
                                            >
                                                {item.label}
                                            </DropdownMenuItem>
                                        </Link>
                                    )
                                })}

                                <DropdownMenuSeparator />

                                <div className="flex flex-col gap-2 items-center p-2">
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
                                    </div>
                                    <Link
                                        href="mailto:contact@exemple.com"
                                        className="px-3 py-2.5 w-full text-center border text-sm hover:bg-accent transition"
                                    >
                                        Par Mail
                                    </Link>
                                </div>
                            </DropdownMenuContent>
                        </DropdownMenu>


                    </nav>
                </div>


            </div>
        </header>
    )
}

export default Header
