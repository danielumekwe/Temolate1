import DigitalSolutions from "@/components/sections/DigitalSolutions";
import AboutWeb365 from "@/components/sections/AboutWeb365";
import { Navbar, Footer } from "@/layouts";
import { Hero, Features, Work, Process, Testimonials, Pricing, Contact } from "@/features";
import { NoiseBackground } from "@/components";
import FinalCTA from "@/components/sections/FinalCTA";
import BrandExperience from "@/components/sections/BrandExperience";
export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      <NoiseBackground />

      <Navbar />

      <Hero />

      <AboutWeb365 />

      <DigitalSolutions />
      
      
      <Features />

      <Work />

    
      
      <BrandExperience />

      <Testimonials />



      <FinalCTA />

      <Footer />

    </main>
  );
}