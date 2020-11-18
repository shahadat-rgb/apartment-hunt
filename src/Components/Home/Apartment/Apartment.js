import React, { useEffect, useState } from "react";

import { Grid } from "@material-ui/core";
import ApartmentList from "../ApartmentList/ApartmentList";

const Apartment = () => {
  const [houses, setHouses] = useState([]);
  useEffect(() => {
    fetch("https://sleepy-everglades-57765.herokuapp.com/getApartment")
      .then((res) => res.json())
      .then((data) => setHouses(data));
  }, []);
  console.log(houses);

  return (
    <div className="container">
      <div className="text-center mb-5">
        <h5
          style={{
            color: "rgba(52, 73, 63, 0.986)rgba(52, 73, 70, 0.986)",
            paddingTop: "20px",
          }}
        >
          House Rent
        </h5>
        <h2 style={{ color: "rgb(22, 49, 38)", fontWeight: "bold" }}>
          Discover The Latest Rent
        </h2>
        <h2 style={{ color: "rgb(22, 49, 38)", fontWeight: "bold" }}>
          
          Available Today
        </h2>
      </div>
      
      <Grid container spacing={3}>

{
    houses.map((houseDetails => <Grid item md ={4}><ApartmentList houseInfo={houseDetails} key={houseDetails._id}></ApartmentList> </Grid> ))
}

</Grid>
      
    </div>
  );
};
export default Apartment;
