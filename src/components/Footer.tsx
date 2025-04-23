import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa"

export default function Footer() {
    return (
        <footer className="bg-black text-white py-10 px-6 border-t border-white/10">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 text-sm sm:text-base font-mono">

                <FooterItem
                    icon={<FaEnvelope className="text-[var(--color-accent)]" />}
                    label="stefan04.neubauer@gmail.com"
                    link="mailto:stefan04.neubauer@gmail.com"
                />
                <FooterItem
                    icon={<FaPhoneAlt className="text-[var(--color-accent)]" />}
                    label="+43 699 17355639"
                    link="tel:+4369917355639"
                />
                <FooterItem
                    icon={<FaMapMarkerAlt className="text-[var(--color-accent)]" />}
                    label="Wels, Upper Austria"
                />

            </div>
        </footer>
    )
}

function FooterItem({
                        icon,
                        label,
                        link
                    }: {
    icon: React.ReactNode
    label: string
    link?: string
}) {
    const content = (
        <div className="flex items-center gap-3 text-white hover:text-[var(--color-accent)] transition duration-300">
            {icon}
            <span>{label}</span>
        </div>
    )

    return link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block">
            {content}
        </a>
    ) : (
        <div>{content}</div>
    )
}