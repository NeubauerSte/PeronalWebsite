import React, { useState } from "react"

interface MobileNavItemProps {
    children: React.ReactNode
    href: string
}

export function MobileNavItem({ children, href }: MobileNavItemProps) {
    const [tapped, setTapped] = useState(false)

    return (
        <a
            href={href}
            className={`nav-item transition-colors duration-300 ${
                tapped ? "text-[var(--color-accent)]" : ""
            }`}
            onTouchStart={() => setTapped(true)}
            onTouchEnd={() => setTimeout(() => setTapped(false), 300)}
        >
            {children}
        </a>
    )
}