// Home.jsx
import { useRef } from 'react';
import AboutUs from './AboutUS';
import Carousel from './Carousel';
import CompanyLogosViewer from './Companylogos';
import Footer from './Footer';
import NavBar from './NavBar';

const Home = () => {
  // Create refs for each section
  const carouselRef = useRef(null);
  const companyLogosRef = useRef(null);
  const aboutUsRef = useRef(null);
  const footerRef = useRef(null);

  // Function to scroll to a section
  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
         {/* <Nav/> */}
      {/* Pass scrollToSection function and refs to NavBar */}
      <NavBar scrollToSection={scrollToSection} refs={{ 
        carouselRef, 
        companyLogosRef, 
        aboutUsRef, 
        footerRef 
      }} />

      <div ref={carouselRef}>
        <Carousel />
      </div>
      <div ref={companyLogosRef}>
        <CompanyLogosViewer />
      </div>
      <div ref={aboutUsRef}>
        <AboutUs />
      </div>
      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
