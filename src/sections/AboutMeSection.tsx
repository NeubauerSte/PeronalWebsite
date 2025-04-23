import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import HourGlassEclipse from "../components/HourGlassEclipse"
import Headline from "../components/ui/Headline"
import { BlueDivider } from "../components/ui/Divider"
import laptop3D from "../assets/3d_model_laptop.webp"
import Tilt from "react-parallax-tilt"
import { useTranslation } from "react-i18next"

export default function AboutMeSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const { t } = useTranslation()

    return (
        <section id="about">
            <HourGlassEclipse>
                <div className="flex absolute inset-0 items-center justify-center px-6">
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        style={{ fontFamily: 'var(--font-mono)' }}
                        className="max-w-6xl text-white"
                    >
                        {/* HEADLINE */}
                        <div className="text-center">
                            <Headline className="font-bold mb-2 md:text-6xl text-4xl">
                                {t("about.headline")}
                            </Headline>
                            <BlueDivider className="mx-auto mb-8 max-w-sm" />
                        </div>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-5 px-5 ">
                            {/* LEFT TEXT BLOCK */}
                            <div className="w-full space-y-6 text-[14px] md:text-[17px] leading-relaxed px-2 text-gray-200 text-left">
                                <div className="md:space-y-12 space-y-6 w-full max-w-[95%]">
                                    <p>{t("about.p1")}</p>
                                    <p>{t("about.p2")}</p>
                                    <p>{t("about.p3")}</p>
                                </div>
                            </div>

                            {/* IMAGE BLOCK */}
                            <div className="w-1/3 hidden md:flex items-end justify-center">
                                <div className="relative w-[40vw] h-[35vh] rounded-[5rem] overflow-hidden shadow-2xl">
                                    <Tilt
                                        glareEnable={true}
                                        glareMaxOpacity={0.2}
                                        glareColor="#88E6E3"
                                        glarePosition="all"
                                        tiltMaxAngleX={8}
                                        tiltMaxAngleY={8}
                                        scale={1.015}
                                        transitionSpeed={2000}
                                        className="w-full h-full"
                                    >
                                        {/* Laptop Image */}
                                        <div
                                            className="w-full h-full bg-center bg-no-repeat bg-contain scale-x-[-1] relative z-10"
                                            style={{ backgroundImage: `url(${laptop3D})` }}
                                        />

                                        {/* Shine */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-75 pointer-events-none animate-pulse z-20" />

                                        {/* Glow */}
                                        <div className="absolute inset-0 bg-[var(--color-accent)]/10 pointer-events-none z-0 blur-xs" />
                                    </Tilt>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </HourGlassEclipse>
        </section>
    )
}