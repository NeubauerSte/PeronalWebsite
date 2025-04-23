import { useEffect, useRef } from "react"

export default function AnimatedCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let animationFrameId: number
        let width = (canvas.width = window.innerWidth)
        let height = (canvas.height = window.innerHeight)
        const mouse = { x: width / 2, y: height / 2 }

        let pulse = 0

        const getIsMobile = () => window.innerWidth <= 768

        let points = Array.from({ length: getIsMobile() ? 90 : 160 }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5),
            vy: (Math.random() - 0.5),
        }))

        const resize = () => {
            width = canvas.width = window.innerWidth
            height = canvas.height = window.innerHeight

            if (!getIsMobile()) {
                points = Array.from({ length: 160 }, () => ({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5),
                    vy: (Math.random() - 0.5),
                }))
            }
        }

        const draw = () => {
            const isMobile = getIsMobile()
            ctx.clearRect(0, 0, width, height)

            pulse = (Math.sin(Date.now() / 500) + 1) * 0.5
            ctx.shadowBlur = 10 + pulse * 10
            ctx.shadowColor = "#88E6E3"
            const hue = Math.floor((Date.now() / 40) % 360)

            points.forEach(p => {
                p.x += p.vx
                p.y += p.vy

                if (p.x < 0 || p.x > width) p.vx *= -1
                if (p.y < 0 || p.y > height) p.vy *= -1

                ctx.beginPath()
                ctx.arc(p.x, p.y, isMobile ? 3 : 2, 0, Math.PI * 2)
                ctx.fillStyle = `hsl(${hue}, 100%, 75%)`
                ctx.fill()

                const dx = p.x - mouse.x
                const dy = p.y - mouse.y
                const dist = Math.sqrt(dx * dx + dy * dy)
                if (dist < 150) {
                    const alpha = 1 - dist / 150
                    ctx.beginPath()
                    ctx.moveTo(p.x, p.y)
                    ctx.lineTo(mouse.x, mouse.y)
                    ctx.strokeStyle = `hsla(${hue}, 100%, 70%, ${alpha * 0.6})`
                    ctx.stroke()
                }
            })

            animationFrameId = requestAnimationFrame(draw)
        }

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX
            mouse.y = e.clientY
        }

        const handleTouchMove = (e: TouchEvent) => {
            const touch = e.touches[0]
            mouse.x = touch.clientX
            mouse.y = touch.clientY
        }

        window.addEventListener("mousemove", handleMouseMove)
        window.addEventListener("touchmove", handleTouchMove)
        window.addEventListener("resize", resize)
        draw()

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            window.removeEventListener("touchmove", handleTouchMove)
            window.removeEventListener("resize", resize)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />
    )
}