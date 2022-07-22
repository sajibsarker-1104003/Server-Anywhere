import React from "react";
import NavBar from "./HomePage/NavBar";
import Banner from "./HomePage/Banner";
import About from "./HomePage/About";
import Qoute from "./HomePage/Quote";
import Service from "./HomePage/Service";
import Review from "./HomePage/Review";
import Package from "./HomePage/Package";
import Market from "./HomePage/Market";
import Account from "./HomePage/Account";
import FAQ from "./HomePage/FAQ";
import Footer from "./HomePage/Footer";

const Main = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <About />
      <Qoute />
      <Service />
      <Review />
      <Package />
      <Market />
      <Account />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Main;
