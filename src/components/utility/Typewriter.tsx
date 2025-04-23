import { useEffect, useState, CSSProperties } from "react"

interface TypewriterProps {
    text: string
    speed?: number
    className?: string
    style?: CSSProperties
}

export default function Typewriter({ text, speed = 50, className = "", style = {} }: TypewriterProps) {
    const [displayed, setDisplayed] = useState("")

    useEffect(() => {
        let index = 0
        const interval = setInterval(() => {
            setDisplayed(text.slice(0, index + 1))
            index++
            if (index >= text.length) clearInterval(interval)
        }, speed)

        return () => clearInterval(interval)
    }, [text, speed])

    return (
        <p className={`whitespace-pre-wrap ${className}`} style={style}>
            {displayed}
        </p>
    )
}