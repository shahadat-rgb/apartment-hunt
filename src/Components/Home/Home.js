import React from "react";
import Banner from "./Banner/Banner";
import Event from "./Event/Event";
import './Home.css'
const Home = () => {
  return (
    <div className="home">
      <Banner></Banner>
      <Event></Event>
    </div>
  );
};

export default Home;
