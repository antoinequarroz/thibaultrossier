import dynamic from "next/dynamic";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Counter from "../src/components/Counter";
import Home from "../src/components/Home";
// import Portfolio from "../src/components/Portfolio";
import Resume from "../src/components/Resume";
import Service from "../src/components/Service";
import Skills from "../src/components/Skills";
import Testimonial from "../src/components/Testimonial";
import Layout from "../src/layouts/Layout";
import {useEffect} from "react";
import Calendrier from "../src/components/Calendrier";
const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});

const Index = () => {
    useEffect(() => {
        document.querySelector("body").classList.add("dark");
    }, []);
    return (
    <Layout>
      <Home />
      <About />
      <Counter />
      <Resume />
      <Testimonial />
      <Calendrier />
      <Contact />
        {/* <Portfolio />
      <Skills />
      <Portfolio />
      <Service />
      <Resume />
      <Testimonial />
      <Blog />
      <Contact />
      */}
    </Layout>
  );
};

export default Index;
