import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HomeBg from "../components/HomeBg";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";

function Home() {
  return (
    <>
      <div className="flex sm:min-h-[880px] lg:min-h-[650px] relative overflow-hidden flex-col">
        <Header />
        <Hero />
        <HomeBg />
      </div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </>
  );
}

export default Home;
