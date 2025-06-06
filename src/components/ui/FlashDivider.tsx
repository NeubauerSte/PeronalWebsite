import lightningDivider from "../../assets/lightning_divider.webp"

interface FlashDividerProps {
    className?: string
}

export default function FlashDivider({ className = "" }: FlashDividerProps) {
    return (
        <div className={`relative w-full overflow-hidden pointer-events-none ${className}`}>
            <img
                src={lightningDivider}
                alt="Lightning Divider"
                className="w-full h-full object-cover"
                style={{
                    WebkitMaskImage: `linear-gradient(to bottom, black 0%, rgba(0,0,0,0.05) 0%, rgba(255,255,255,0.5) 30%, rgba(255,255,255,1) 60%, transparent 100%)`,
                    maskImage: `linear-gradient(to bottom, black 0%, rgba(0,0,0,0.05) 0%, rgba(255,255,255,0.5) 30%, rgba(255,255,255,1) 60%, transparent 100%)`,
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskSize: "100% 100%",
                    maskSize: "100% 100%",
                }}
            />
        </div>
    )
}