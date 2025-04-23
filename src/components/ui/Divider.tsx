export function BlueDivider({ className = "w-full", glow = true }) {
    return (
        <div className={`relative h-0.5 mx-auto rounded-full shadow-md ${className}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#234F8D] to-transparent rounded-full" />
            {glow && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#88E6E3] to-transparent h-full rounded-full" />
            )}
        </div>
    )
}

export function TurquoiseDivider({ className = "w-full", glow = true }) {
    return (
        <div className={`relative h-0.5 mx-auto rounded-full shadow-md ${className}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#63E] to-transparent rounded-full" />
            {glow && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#88E6E3] to-transparent h-full rounded-full" />
            )}
        </div>
    )
}