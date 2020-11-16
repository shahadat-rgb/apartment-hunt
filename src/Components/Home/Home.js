import React from "react";
import Banner from "./Banner/Banner";
import Event from "./Event/Event";
import Footer from "./Footer/Footer";
import './Home.css'
const Home = () => {
  return (
    <div className="home">
      <Banner></Banner>
      <Event></Event>
      <Footer></Footer>
    </div>
  );
};

export default Home;
