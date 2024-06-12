import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { Slider } from "../components/Slider";
import { Accordination } from "../components/Accordination";
import { ContactUs } from "../components/ContactUs";
import { Footer } from "../components/Footer";
import { GetStarted } from "../components/GetStarted";
import { CompanyLogos } from "../components/CompanyLogos";

const Home = () => {
  return (
    <>
      <HeroSection />
      <CompanyLogos />
      <Slider />
      <Accordination />
      <ContactUs />
      <GetStarted />
    </>
  );
};

export default Home;
