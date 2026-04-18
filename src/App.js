import React from "react";
import Navbar from "./Home/Nabar";
import Body from "./Home/Body";
import Sectionlayout from "./Home/Sectionlayout";
import Sectionheathy from "./Home/Sectionheathy"; 
import Testimonials from "./Home/Testimonials";

import PricingSection from "./Home/Prices";
import Footer from "./Home/Footer";


function App() {
  return (
    <>
      <Navbar />
      <Body />
      <Sectionlayout />
      <Sectionheathy />
   
      <PricingSection />
      <Testimonials />
      <Footer />
      
    </>
  );
}

export default App;
