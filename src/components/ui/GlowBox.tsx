import React from "react"

export default function GlowBox({
                                    children,
                                    className = "",
                                    borderColor,
                                    white = false
                                }: {
    children: React.ReactNode
    className?: string
    borderColor?: string
    white?: boolean
}) {
    const resolvedBorder = white ? "#ffffff" : borderColor || "#6633EE" // #63E

    return (
        <div className={`relative ${className}`}>
            {/* Glow-Effekt */}
            <div
                className="absolute inset-0 rounded-2xl"
                style={{
                    boxShadow: `
                        0 0 10px rgba(102, 51, 238, 0.6),
                        0 0 20px rgba(102, 51, 238, 0.4),
                        0 0 30px rgba(102, 51, 238, 0.2)
                    `
                }}
            />

            {/* Inhalt */}
            <div
                className="relative rounded-2xl border-2 flex items-center justify-center text-center px-6 py-4"
                style={{
                    borderColor: resolvedBorder,
                    backgroundColor: white ? "rgba(255,255,255,0.05)" : "rgba(102, 51, 238, 0.05)"
                }}
            >
                {children}
            </div>
        </div>
    )
}