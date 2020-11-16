import React from "react";
import Banner from "./Banner/Banner";

import MainSection from "./MainSection/MainSection";
import Rent from "./Rent/Rent";
import Event from "./Event/Event";
import Footer from "./Footer/Footer";
import './Home.css'
const Home = () => {
  return (
    <div>
      <Banner></Banner>
       <MainSection></MainSection>

      <Event></Event>
      <Footer></Footer>

    </div>
  );
};

export default Home;
