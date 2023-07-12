import React from "react";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import FixSocialIcon from "../components/SocialIcon/FixSocialIcon";
import Experiences from "../components/Experiences/Experiences";
function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Experiences/>
      <Contact />
      <Footer />
      <FixSocialIcon />
    </>
  );
}

export default Home;
