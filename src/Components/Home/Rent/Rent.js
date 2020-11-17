import React, { useState } from 'react';
import './Rent.css'
import { Grid } from '@material-ui/core';
import AllRent from '../AllRent/AllRent';
import FakeData from '../../FakeData/FakeData';
const Rent = () => {
  const [houses,setHouses] = useState(FakeData);

  return (
    <div className="container">
        <div className="text-center mb-5">
             <h5 style={{color:'rgba(52, 73, 63, 0.986)rgba(52, 73, 70, 0.986)',paddingTop:'20px'}}>House Rent</h5>
             <h2 style={{color:'rgb(22, 49, 38)',fontWeight:"bold"}}>Discover The Latest Rent</h2>
             <h2 style={{color:'rgb(22, 49, 38)',fontWeight:"bold"}}> Available Today</h2>
        </div>
        <Grid container spacing={3}>

{
   houses.map(houseDetails => <Grid item md ={4}><AllRent houseInfo={houseDetails} key={houseDetails.id}></AllRent> </Grid> )
}

</Grid>
    </div>
  );
};

export default Rent;