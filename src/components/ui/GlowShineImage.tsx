// components/ui/GlowTiltShineImage.tsx
import { motion } from "framer-motion"

interface Props {
    src: string
    alt?: string
    className?: string
    size?: string
}

export default function GlowShineImage({
                                               src,
                                               alt = "",
                                               className = "",
                                               size = "w-[160px] md:w-[220px]"
                                           }: Props) {
    return (
        <div className={`relative ${size} aspect-square ${className}`}>
            {/* Pulsierender Glow */}
            <motion.div
                className="absolute inset-0 z-0 rounded-full"
                animate={{
                    boxShadow: [
                        "0 0 0px #63E",
                        "0 0 20px #63E",
                        "0 0 10px #63E",
                        "0 0 0px #63E",
                    ]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut"
                }}
            />

            {/* Shine Overlay */}
            <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden rounded-full">
                <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent animate-shimmer opacity-40" />
            </div>

            {/* Main Image mit Tilt */}
            <motion.img
                src={src}
                alt={alt}
                className="relative z-20 w-full h-full object-cover rounded-full shadow-lg"
                whileHover={{
                    rotateY: 8,
                    rotateX: -5,
                    scale: 1.04,
                    transition: { type: "spring", stiffness: 120, damping: 12 }
                }}
                whileTap={{
                    scale: 0.95,
                    transition: { duration: 0.2, ease: "easeOut" }
                }}
                draggable={false}
                style={{
                    WebkitTapHighlightColor: "transparent",
                    backfaceVisibility: "hidden",
                    transformStyle: "preserve-3d"
                }}
            />
        </div>
    )
}