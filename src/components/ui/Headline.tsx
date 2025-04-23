import React from "react"

interface HeadlineProps {
    children: React.ReactNode
    className?: string
    style?: React.CSSProperties
}

export default function Headline({ children, className = "", style = {} }: HeadlineProps) {
    return (
        <h1
            className={`text-center font-bold tracking-tight ${className}`}
            style={style}
        >
            {children}
        </h1>
    )
}