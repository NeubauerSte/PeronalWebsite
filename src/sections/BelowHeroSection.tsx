import marbleBackground from "../assets/marble_background.webp"
import FlashDivider from "../components/ui/FlashDivider.tsx";
import AboutMeSection from "./AboutMeSection.tsx";
import ProjectsSection from "./ProjectsSection.tsx";
import LearningSection from "./LearningSection.tsx";


export default function BelowHeroSection() {


    return (
        <>
            {/* Marble Background Block */}
            <section
                className="relative z-10 w-full min-h-screen text-[var(--color-text-main)]"
                style={{
                    backgroundImage: `url(${marbleBackground})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundBlendMode: "overlay",
                    backgroundColor: "rgba(0, 0, 0, 0.1)",
                }}
            >
                <FlashDivider className="origin-top md:-translate-y-3 -translate-y-1.5 scale-y-120 md:scale-y-60 brightness-100 opacity-90 contrast-120" />

                <AboutMeSection />
                <ProjectsSection />

                {/* Smooth Gradient Bottom into black*/}
                <div
                    className="w-full h-28 -mt-8 pointer-events-none z-20 pt-15"
                    style={{
                        background: "linear-gradient(to top, #000000 0%, rgba(0,0,0,0) 100%)",
                        transform: "translateZ(0)",
                    }}
                />
            </section>

            <LearningSection />

        </>
    )
}