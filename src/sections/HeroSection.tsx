import {useEffect, useState} from "react"
import Typewriter from "../components/utility/Typewriter.tsx"
import Headline from "../components/ui/Headline.tsx"
import { motion } from "framer-motion"
import GlowCard from "../components/ui/GlowCard.tsx"
import { useTranslation } from "react-i18next"
import AnimatedCanvas from "../components/utility/AnimatedCanvas"

interface HeroSectionProps {
    backgroundClass?: string
}


export default function HeroSection({ backgroundClass = "bg-black" }: HeroSectionProps) {

    const { t } = useTranslation()
    const [index, setIndex] = useState(0)

    const cards = [
        {
            title: t("hero.cards.performance.title"),
            text: t("hero.cards.performance.text")
        },
        {
            title: t("hero.cards.design.title"),
            text: t("hero.cards.design.text")
        },
        {
            title: t("hero.cards.code.title"),
            text: t("hero.cards.code.text")
        }
    ]


    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % cards.length)
        }, 3500)
        return () => clearInterval(interval)
    }, [cards.length])

    return (
        <section className="relative w-full h-screen overflow-hidden">
            <div className={`absolute inset-0 z-0 h-full w-full ${backgroundClass}`} />
            <AnimatedCanvas/>
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
                <Headline
                    className="text-5xl md:text-6xl mb-4"
                    style={{ fontFamily: "var(--font-mono)" }}
                >
                    {t("hero.title")}
                </Headline>

                <Typewriter
                    text={t("hero.subtitle")}
                    speed={35}
                    className="text-lg md:text-xl max-w-xl text-white"
                    style={{ fontFamily: "var(--font-mono)" }}
                />

                {/* Desktop Slide-In */}
                <div className="mt-12 hidden md:flex gap-6">
                    {cards.map((card, i) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.3 }}
                        >
                            <GlowCard title={card.title} text={card.text} className="w-64" />
                        </motion.div>
                    ))}
                </div>

                {/* Mobile Rotator */}
                <div className="mt-10 md:hidden">
                    <motion.div
                        key={cards[index].title}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5 }}
                    >
                        <GlowCard title={cards[index].title} text={cards[index].text} className="w-72" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}