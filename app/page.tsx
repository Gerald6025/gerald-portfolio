import Image from "next/image";
import Nav from "../components/nav";
import React from "react";
import Banner from "../components/banner";
import About from "../components/about";
import Projects from "../components/projects";
import Skills from "../components/skills";
import Contact from "../components/contact";
import Footer from "../components/footer";


export default function Home() {
  return (
    <div className=" bg-black  w-full">
      <Nav />
      <section id="home">
        <Banner/>
      </section>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
