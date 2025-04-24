import { Helmet } from "react-helmet-async"
import Header from "./components/Header"
import HeroSection from "./sections/HeroSection.tsx"
import BelowHeroSection from "./sections/BelowHeroSection.tsx"
import Footer from "./components/Footer.tsx"
import "./App.css"

function App() {
    return (
        <div className="relative min-h-screen overflow-x-hidden">
            <Helmet>
                <title>Stefan Neubauer – Developer Portfolio</title>
                <meta name="description" content="Modern web experiences with performance, design & AI. Portfolio of Stefan Neubauer." />
                <meta name="keywords" content="Web, Developer, Portfolio, Stefan Neubauer, React, TypeScript, KI, Design, Fullstack" />
                <meta name="author" content="Stefan Neubauer" />

                {/* Social Media */}
                <meta property="og:title" content="Stefan Neubauer – Developer Portfolio" />
                <meta property="og:description" content="Web-Erlebnisse mit Design, Performance & KI." />
                <meta property="og:image" content="https://stefannbr.netlify.app/preview.jpg" />
                <meta property="og:url" content="https://stefannbr.netlify.app" />
                <meta property="og:type" content="website" />
            </Helmet>

            <Header />
            <HeroSection backgroundClass="bg-[radial-gradient(100%_100%_at_50%_0%,#63E_0%,#000_100%)]" />
            <BelowHeroSection />
            <Footer />
        </div>
    )
}

export default App