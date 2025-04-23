import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslation } from "react-i18next"

const flags = {
    de: "🇩🇪",
    en: "🇺🇸"
}

interface Props {
    size?: string
    className?: string
    onChange?: (lang: "de" | "en") => void
}

export default function LanguageSwitcher({ size = "text-3xl", className = "", onChange }: Props) {
    const [open, setOpen] = useState(false)
    const { i18n } = useTranslation()
    const currentLang = i18n.language as "de" | "en"

    const toggleOpen = () => setOpen(prev => !prev)

    const switchLang = (lang: "de" | "en") => {
        i18n.changeLanguage(lang)
        setOpen(false)
        if (onChange) onChange(lang)
    }

    return (
        <div className="relative">
            <motion.div
                className={`rounded-full border border-[var(--color-accent-dark)] shadow-[0_0_6px_var(--color-accent-dark)] bg-transparent flex items-center justify-center px-3 ${className}`}
            >
                <AnimatePresence mode="wait" initial={false}>
                    <motion.button
                        key={currentLang}
                        onClick={toggleOpen}
                        className={`bg-transparent outline-none focus:outline-none ${size}`}
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.2 }}
                    >
                        {flags[currentLang]}
                    </motion.button>
                </AnimatePresence>
            </motion.div>

            {/* Dropdown-Box */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        key="dropdown"
                        initial={{ opacity: 0, y: -5, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -5, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 flex flex-col items-center gap-2 bg-transparent rounded-full px-3 border border-[var(--color-accent-dark)] shadow-[0_0_6px_var(--color-accent-dark)] backdrop-blur-sm"
                    >
                        {Object.entries(flags).map(([code, flag]) => {
                            if (code === currentLang) return null
                            return (
                                <motion.button
                                    key={code}
                                    onClick={() => switchLang(code as "de" | "en")}
                                    className={`${size} hover:scale-110 transition-transform`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    {flag}
                                </motion.button>
                            )
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}