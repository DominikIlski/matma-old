import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ExamsSection from "../components/ExamsSection";
import OfferSection from "../components/OfferSection";
import StepsSection from "../components/StepsSection";
import ForWhoSection from "../components/ForWhoSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Design3() {
  return (
    <div className="min-h-screen bg-[#faf6f1] text-[#1e293b] antialiased">
      <a href="#main-content" className="skip-link">
        Przejdź do treści
      </a>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ExamsSection />
        <OfferSection />
        <StepsSection />
        <ForWhoSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
