// components/ui/TurquoiseButton.tsx

import React from "react";

interface TurquoiseButtonProps {
    to: string
    children: React.ReactNode
    className?: string
}

export default function TurquoiseButton({ to, children, className = "" }: TurquoiseButtonProps) {
    return (
        <a
            href={to}
            style={{ fontFamily: 'var(--font-mono)' }}
            download
            className={`inline-flex items-center justify-center mt-2 bg-gradient-to-r from-[#63E] to-[#88E6E3] hover:from-[#88E6E3] hover:to-[#C3FFFF] rounded-full shadow-[0_0_10px_#88E6E3] transition-transform transform hover:scale-105 ${className}`}
        >
            {children}
        </a>
    )
}