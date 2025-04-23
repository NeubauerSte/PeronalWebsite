import { ReactNode, useState } from "react"

export default function Tooltip({ children, text }: { children: ReactNode; text: string }) {
    const [visible, setVisible] = useState(false)

    return (
        <div
            className="relative inline-block"
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
        >
            {children}
            <div
                className={`
                    absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1.5 text-xs text-white
                    bg-black/80 border-[0.5px] border-[var(--color-accent)] rounded shadow-lg z-50 whitespace-nowrap
                    transition-all duration-300
                    ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
                `}
                style={{ transformOrigin: "bottom center" }}
            >
                {text}
            </div>
        </div>
    )
}