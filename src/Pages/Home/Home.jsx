import React from "react";
import Banner from "./Banner";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Footer from "../../Shared/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <div>
        <AboutUs />
      </div>
      <div className="mb-20">
        <Services />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
