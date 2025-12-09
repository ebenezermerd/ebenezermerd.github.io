import BodyAntialiased from "./imports/BodyAntialiased";
import FeaturedProjects from "./components/FeaturedProjects";
import CuratedWorks from "./components/CuratedWorks";
import AboutMeSection from "./components/AboutMeSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <BodyAntialiased />
      <FeaturedProjects />
      <CuratedWorks />
      <AboutMeSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </>
  );
}