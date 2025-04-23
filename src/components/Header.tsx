import { useEffect, useState } from "react"
import { BlueDivider } from "./ui/Divider"
import detectiveLogo from "../assets/detective_logo.svg"
import {MobileNavItem} from "./ui/MobileNavItem.tsx";
import LanguageSwitcher from "./LanguageSwitcher.tsx";
import { useTranslation } from "react-i18next"

export default function Header() {
    const [shrink, setShrink] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const { t } = useTranslation()

    useEffect(() => {
        let ticking = false

        const updateScroll = () => {
            const scrollY = window.scrollY
            setShrink(scrollY > 10)
            ticking = false
        }

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScroll)
                ticking = true
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={`
        absolute top-0 left-0 w-full z-30 transition-all duration-300 
        ${shrink ? "pt-2 pb-1 opacity-40" : "pt-4 pb-2 opacity-100"}
      `}
            style={{transformOrigin: "top center", backgroundColor: "var(--color-bg-transparent)"}}
        >
            {/* Desktop Header */}
            <div className="w-full mx-auto px-16 hidden md:grid md:grid-cols-3 items-center">
                {/* Left: Name */}
                <div className="flex items-center">
                    <div
                        className={`font-future whitespace-nowrap text-left text-3xl`}
                    >
                         <span
                             style={{
                                 color: "var(--color-accent-dark)",
                                 fontWeight: "bold",
                                 fontSize: "2.2rem",
                                 letterSpacing: "0.1rem",

                             }}
                         >Stefan</span>

                        <span
                            style={{
                                marginLeft: "0.5rem",
                                color: "var(--color-accent)",
                                letterSpacing: "0.15rem",
                                textShadow: "0 0 3px var(--color-accent), 0 0 1px var(--color-accent)"
                            }}
                        >NBR</span>

                    </div>
                </div>

                {/* Center: Navigation */}
                <nav className="flex items-center justify-center space-x-20 text-[1.5rem] tracking-widest font-bold">
                    <a href="#about" className="nav-item hover:after:animate-pulseGlow">
                        {t("nav.about")}
                    </a>
                    <a href="#projects" className="nav-item hover:after:animate-pulseGlow">
                        {t("nav.projects")}
                    </a>
                    <a href="#learning" className="nav-item hover:after:animate-pulseGlow">
                        {t("nav.learning")}
                    </a>
                </nav>

                {/* Right: Icon + Language-Switcher */}
                <div className="flex justify-end items-center gap-4 text-lg">
                    <LanguageSwitcher
                        size="text-4xl"
                        onChange={(lang) => console.log("Switched to:", lang)}
                    />
                    <img
                        src={detectiveLogo}
                        alt="Detective Icon"
                        className="w-15 h-12 object-contain hover:scale-110 transition-transform duration-300"
                    />
                </div>
            </div>

            {/* Mobile Header */}
            <div className="md:hidden flex items-center justify-between px-6">
                <div
                    className={`font-future whitespace-nowrap text-left text-2xl`}
                >
                    <span
                         style={{
                             color: "var(--color-accent-dark)",
                             fontWeight: "bold",
                             letterSpacing: "0.10rem",
                             fontSize: "1.7rem",
                         }}
                     >Stefan</span>

                    <span
                        style={{
                            marginLeft: "0.25rem",
                            color: "var(--color-accent)",
                            letterSpacing: "0.25rem",
                            textShadow: "0 0 3px var(--color-accent), 0 0 1px var(--color-accent)"
                        }}
                    >NBR</span>
                </div>

                {/* Language Switch + Burger */}
                <div className="flex items-center gap-4">
                    <div className="rounded-full border border-[var(--color-accent-dark)] shadow-[0_0_4px_var(--color-accent-dark)]">
                        <LanguageSwitcher
                            size="text-3xl"
                            onChange={(lang) => console.log("Switched to:", lang)}
                        />
                    </div>

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-white text-4xl focus:outline-none -mt-2"
                    >
                        ☰
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`
                md:hidden overflow-hidden transition-all duration-500 ease-in-out
                ${menuOpen ? "max-h-40 opacity-100 pt-2" : "max-h-0 opacity-0"}
            `}
            >
                <div className="w-full flex justify-center gap-[5vw] text-lg tracking-wider font-bold">
                    <MobileNavItem href="#about">{t("nav.about")}</MobileNavItem>
                    <MobileNavItem href="#projects">{t("nav.projects")}</MobileNavItem>
                    <MobileNavItem href="#learning">{t("nav.learning")}</MobileNavItem>
                </div>
            </div>

            {/* Blue Divider */}
            <div className="absolute bottom-0 w-[110vw]">
                <BlueDivider className="w-full h-[1.2px] mt-1" glow={true} />
            </div>
        </header>
    )
}