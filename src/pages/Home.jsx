import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Services from "../components/Services/Services";
import Links from "../components/Links/Links";
import About from "../components/About/About";
import News from "../components/News/News";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="z-0 relative top-[120px] mobile:top-[114px]">
        <Header />
        <Services />
        <About />
        <Links />
        <News />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
