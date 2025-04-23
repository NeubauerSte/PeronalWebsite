interface GlowCardProps {
    title: string
    text: string
    className?: string
}

export default function GlowCard({ title, text, className = "" }: GlowCardProps) {
    return (
        <div
            className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-md transition-transform duration-300 hover:scale-[1.05] ${className}`}
            style={{ fontFamily: 'var(--font-mono)' }}
        >
            <h4 className="text-xl font-bold text-[var(--color-accent)] mb-2">{title}</h4>
            <p className="text-sm text-gray-300">{text}</p>
        </div>
    )
}
