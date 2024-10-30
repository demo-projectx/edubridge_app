import Features from "./sections/Features";
import HowItWorks from "./sections/HowItWorks";
import Testimonials from "./sections/Testimonials";
import Awards from "./sections/Awards";
import Hero from "./sections/Hero";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Awards />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
