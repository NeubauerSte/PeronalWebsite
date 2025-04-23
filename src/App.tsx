import Header from "./components/Header"
import "./App.css"
import HeroSection from "./sections/HeroSection.tsx";
import BelowHeroSection from "./sections/BelowHeroSection.tsx";
import Footer from "./components/Footer.tsx";

function App() {
    return (
        <div className="relative min-h-screen overflow-x-hidden">
            <Header />
            <HeroSection backgroundClass="bg-[radial-gradient(100%_100%_at_50%_0%,#63E_0%,#000_100%)]" />
            <BelowHeroSection />
            <Footer/>

        </div>
    )
}

export default App