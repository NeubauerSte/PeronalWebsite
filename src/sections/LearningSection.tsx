import { CheckCircle } from "lucide-react"
import Headline from "../components/ui/Headline"
import TurquoiseButton from "../components/ui/Button"
import { TurquoiseDivider } from "../components/ui/Divider"
import coding3D from "../assets/coding_3d.webp"
import { motion } from "framer-motion"
import GlowBox from "../components/ui/GlowBox.tsx";
import GlowShineImage from "../components/ui/GlowShineImage.tsx";
import CV from "../assets/Neubauer_CV.pdf"
import { useTranslation } from "react-i18next"


export default function LearningSection() {
    const { t } = useTranslation();

    const leftList = [
        t("learning.left.angular"),
        t("learning.left.reactNative"),
        t("learning.left.nextjs")
    ]

    const rightList = [
        t("learning.right.platform"),
        t("learning.right.membership"),
        t("learning.right.bachelor")
    ]

    return (
        <section id="learning" className="relative w-full bg-black text-white overflow-hidden py-24 px-6">
            {/* Desktop Layout */}
            <div className="relative z-10 max-w-7xl mx-auto hidden md:flex flex-row items-start justify-between gap-16">
                {/* Left Column */}
                <div className="flex-1 flex flex-col gap-8">
                    {/* Headline */}
                    <Headline
                        className="text-white text-3xl"
                        style={{ textShadow: "0 0 1px white, 0 0 12px rgba(255,255,255,0.4)" }}
                    >
                        {t("learning.headlines.left")}
                    </Headline>

                    {/* List + Image */}
                    <div className="flex items-center gap-6">
                        {/* List */}
                        <div className="flex-1 flex justify-center">
                            <ul className="flex flex-col items-start space-y-5 text-lg">
                                {leftList.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 leading-snug">
                                        <CheckCircle
                                            className="text-[var(--color-accent)] w-5 h-5 flex-shrink-0"
                                            style={{ marginTop: "1px" }}
                                        />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Image */}
                        <GlowShineImage src={coding3D} alt="Coding 3D" className="translate-y-8" />
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex-1 flex flex-col gap-21">
                    <Headline
                        className="text-white text-3xl"
                        style={{ textShadow: "0 0 1px white, 0 0 12px rgba(255,255,255,0.4)" }}
                    >
                        {t("learning.headlines.right")}
                    </Headline>

                    {/* List */}
                    <ul className="flex flex-col items-start  space-y-5 text-lg">
                        {rightList.map((item, i) => (
                            <li key={i} className="flex items-center gap-3 leading-snug">
                                <CheckCircle
                                    className="text-[var(--color-accent)] w-5 h-5 flex-shrink-0"
                                    style={{ marginTop: "1px" }}
                                />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Mobile Layout */}
            <GlowBox className="md:hidden">
                <div className="relative z-10 max-w-2xl mx-auto flex flex-col gap-12 px-4 py-3">
                    {/* Left Column Mobile */}
                    <div>
                        <Headline
                            className="text-white text-3xl mb-6"
                            style={{ textShadow: "0 0 1px white, 0 0 12px rgba(255,255,255,0.4)" }}
                        >
                            {t("learning.headlines.left")}
                        </Headline>

                        {/* Divider */}
                        <TurquoiseDivider className="w-full mx-auto opacity-40 my-4" />

                        <div className="flex items-start gap-4 max-w-full overflow-hidden">
                            {/* List */}
                            <ul className="space-y-4 text-lg text-left flex-1 min-w-0" >
                                {leftList.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle className="text-[var(--color-accent)] w-5 h-5 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Icon */}
                            <motion.img
                                src={coding3D}
                                alt="Coding 3D Icon"
                                whileTap={{
                                    scale: 0.90,
                                    transition: { duration: 0.2, ease: "easeOut" }
                                }}
                                className="w-[150px] h-auto object-contain drop-shadow-xl cursor-pointer flex-shrink-0"
                                draggable={false}
                                style={{
                                    WebkitTapHighlightColor: "transparent",
                                    WebkitBackfaceVisibility: "hidden",
                                    backfaceVisibility: "hidden",
                                    transformStyle: "preserve-3d"
                                }}
                            />
                        </div>
                    </div>

                    {/* Right Column Mobile */}
                    <div>
                        <Headline
                            className="text-white text-3xl mb-6"
                            style={{ textShadow: "0 0 1px white, 0 0 12px rgba(255,255,255,0.4)" }}
                        >
                            {t("learning.headlines.right")}
                        </Headline>

                        {/* Divider */}
                        <TurquoiseDivider className="w-full mx-auto opacity-40 my-4" />

                        <ul className="space-y-4 text-lg text-left">
                            {rightList.map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <CheckCircle className="text-[var(--color-accent)] w-5 h-5 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </GlowBox>


            {/* Desktop Divider Positioning */}
            <div className="relative w-full hidden md:block">

                <TurquoiseDivider className="w-full max-w-7xl mx-auto -translate-y-[25vh]" />


                <TurquoiseDivider
                    className="w-1/4 rotate-90 -translate-y-[9vh] mx-auto"
                />


                <TurquoiseDivider className="w-full max-w-7xl mx-auto mt-16" />
            </div>

            <div className="mt-16 flex justify-center">
                <TurquoiseButton to={CV} className="text-xl w-4/5 sm:w-2/3 md:w-1/4 px-10 py-6">
                    {t("cv")}
                </TurquoiseButton>
            </div>
        </section>
    )
}