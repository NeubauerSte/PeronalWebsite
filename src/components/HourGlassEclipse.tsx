import React from "react"

interface HourGlassEclipseProps {
    children: React.ReactNode
}

export default function HourGlassEclipse({ children }: HourGlassEclipseProps) {
    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            {/* Multiply Layer with Eclipse und Hourglass Cutouts (Desktop) */}
            <div className="absolute inset-0 z-0 hidden md:block mix-blend-multiply pointer-events-none">
                <div className="relative w-full h-full">
                    {/* Eclipse Layer */}
                    <div className="absolute inset-0 -z-10 pointer-events-none">
                        <div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[475vw] h-[205vh]"
                            style={{
                                background: `
                  radial-gradient(
                    ellipse at center,
                    rgba(0, 0, 0, 1) 0%,
                    rgba(0, 0, 0, 0.98) 10%,
                    rgba(0, 0, 0, 0.95) 15%,
                    rgba(0, 0, 0, 0.93) 20%,
                    rgba(0, 0, 0, 0.9) 24%,
                    rgba(0, 0, 0, 0.88) 26%,
                    rgba(0, 0, 0, 0.86) 27%,
                    rgba(0, 0, 0, 0.83) 28%,
                    rgba(0, 0, 0, 0.8) 29%,
                    rgba(0, 0, 0, 0.78) 30%,
                    rgba(0, 0, 0, 0.4) 31%,
                    rgba(0, 0, 0, 0.2) 32%,
                    rgba(0, 0, 0, 0.08) 33%,
                    rgba(0, 0, 0, 0.02) 34%,
                    rgba(0, 0, 0, 0.005) 35%,
                    transparent 36%
                  )`,
                                maskImage: `
                  radial-gradient(
                    ellipse at center,
                    rgba(0, 0, 0, 1) 0%,
                    rgba(0, 0, 0, 0.99) 5%,
                    rgba(0, 0, 0, 0.97) 10%,
                    rgba(0, 0, 0, 0.94) 15%,
                    rgba(0, 0, 0, 0.9) 20%,
                    rgba(0, 0, 0, 0.85) 22%,
                    rgba(0, 0, 0, 0.75) 24%,
                    rgba(0, 0, 0, 0.6) 26%,
                    rgba(0, 0, 0, 0.4) 28%,
                    rgba(0, 0, 0, 0.2) 29%,
                    rgba(0, 0, 0, 0.05) 30%,
                    transparent 30.5%
                  )`,
                                WebkitMaskRepeat: "no-repeat",
                                maskRepeat: "no-repeat",
                                WebkitMaskSize: "100% 100%",
                                maskSize: "100% 100%",
                            }}
                        />
                    </div>


                    <div className="pointer-events-none absolute inset-0">
                        {/* Upper Cutout */}
                        <div
                            className="absolute top-0 left-1/2 -translate-x-1/2 w-[105vw] h-[16vh] rounded-b-[50%]"
                            style={{ background: "white" }}
                        />

                        {/* Lower Cutout */}
                        <div
                            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[105vw] h-[16vh] rounded-t-[50%]"
                            style={{ background: "white" }}
                        />
                    </div>
                </div>
            </div>

            {/* Mobile: No Cutouts */}
            <div className="absolute inset-0 z-0 md:hidden pointer-events-none">
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800vw] h-[190vh]"
                    style={{
                        background: `
              radial-gradient(
                ellipse at center,
                rgba(0, 0, 0, 1) 0%,
                rgba(0, 0, 0, 0.98) 10%,
                rgba(0, 0, 0, 0.95) 15%,
                rgba(0, 0, 0, 0.93) 20%,
                rgba(0, 0, 0, 0.9) 24%,
                rgba(0, 0, 0, 0.88) 26%,
                rgba(0, 0, 0, 0.86) 27%,
                rgba(0, 0, 0, 0.83) 28%,
                rgba(0, 0, 0, 0.8) 29%,
                rgba(0, 0, 0, 0.6) 30%,
                rgba(0, 0, 0, 0.4) 31%,
                rgba(0, 0, 0, 0.2) 32%,
                rgba(0, 0, 0, 0.08) 33%,
                rgba(0, 0, 0, 0.02) 34%,
                rgba(0, 0, 0, 0.005) 35%,
                transparent 36%
              )`
                    }}
                />
            </div>

            {/* Content onto the Eclipse */}
            <div className="relative z-10 translate-y-[50vh] ">
                {children}
            </div>
        </div>
    )
}