import React from "react"

export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return (
        <div
            className={`rounded-2xl border border-[#63E] ${className}`}
            style={{
                backgroundColor: "rgba(0,0,0,0.4)",
                boxShadow: `
          0 0 8px #1a3d55,
          0 0 1px #1a3d55 inset
        `,
            }}
        >
            {children}
        </div>
    )
}

export function CardContent({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return <div className={`p-6 text-white ${className}`}>{children}</div>
}