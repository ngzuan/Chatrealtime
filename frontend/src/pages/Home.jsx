import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HomeBg from "../components/HomeBg";

function Home() {
  return (
    <div className="flex h-full relative overflow-hidden flex-col">
      <Header />
      <Hero />
      <HomeBg />
    </div>
  );
}

export default Home;
