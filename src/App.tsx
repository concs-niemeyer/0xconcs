import HeaderSection from "./components/HeaderContent";
import HeroSection from "./components/HeroContent";
import AboutSection from "./components/AboutContent";
import MainSection from "./components/MainContent";
import ProjectsSection from "./components/ProjectsContent";
import ContactSection from "./components/ContactContent";
import { useAccount } from "wagmi";
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from "@vercel/analytics/react"

function App() {
  const { isConnected } = useAccount();
  return (
     <div className="scroll-smooth">
      <HeaderSection />
      <HeroSection />
      <AboutSection />
      <div>
        {isConnected ? (
          <MainSection />
        ) : (
          <>
            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md">
              <p>🔐 Connect your wallet to access exclusive content</p>
            </div>
          </>
        )}
      </div>
      <ProjectsSection />
      <ContactSection />
      < SpeedInsights/>
      <Analytics/>
    </div>
  );
}

export default App;
