import React, {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import TopBar from "../Home/TopBar/TopBar";
import "./HouseDetails.css";

const HouseDetails = () => {
  const {houseId} = useParams();
  const [house, setHouse] = useState([]);
  const [rent, setRent] = useState([]);
  useEffect(() => {
    fetch(`https://sleepy-everglades-57765.herokuapp.com/HouseDetails/${houseId}`)
      .then((res) => res.json())
      .then((data) => setHouse(data));
  }, [houseId]);

  const handleSubmit = (e) => {
    const formData = new FormData();
    formData.append("rentName", house.title);
    formData.append("fullName", rent.name);
    formData.append("email", rent.email);
    formData.append("phoneNumber", rent.phone);
    formData.append("message", rent.message);
    // formData.append("userName", loggedInUser.name);
    // formData.append("userEmail", loggedInUser.email);
    console.log("hello");

    fetch("https://sleepy-everglades-57765.herokuapp.com/addARent", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        window.alert("Service successfully added");
      })
      .catch((error) => {
        console.error(error);
      });

    e.preventDefault();
  };

  const handleBlur = (e) => {
    const newRent= { ...rent };
    newRent[e.target.name] = e.target.value;
    console.log(newRent);
    setRent(newRent);
  };

  return (
    <div>
      <TopBar></TopBar>
      <div className="banner">
        <h1
          style={{ paddingTop: "120px", paddingBottom: "120px" }}
          className="text-white text-center"
        >
          Apartment
        </h1>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-7">
            <img style={{ width: "100%" }} src={`https://sleepy-everglades-57765.herokuapp.com/${house.image}`} alt="" />

            <div className="row mt-3"></div>
            <div className="row">
              <div className="col-md-10">
                <h2 style={{ color: "#275a53", fontWeight: "bold" }}>
                  {house.title}{" "}
                </h2>
              </div>
              <div className="col-md-2">
                <h2 style={{ color: "#275a53", fontWeight: "bold" }}>
                  {" "}
                  ${house.price}{" "}
                </h2>
              </div>
            </div>
            <p className="card-text mb-5"> 3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne. </p>
            <h4
              style={{
                color: "rgb(22, 49, 38)",
                fontWeight: "bold",
                paddingBottom: "10px",
              }}
            >
              Price Details
            </h4>
            <div className="card-text mb-5">
              <p> Rent/Month : {house.price}(negotiable) </p>
              <p> Service Charge: 8000 Tk per month, subject to change  </p>
              <p>Security Deposit :3  month's rent</p>
              
            </div>

            <h4
              style={{
                color: "rgb(22, 49, 38)",
                fontWeight: "bold",
                paddingBottom: "10px",
              }}
            >
              Property Details
            </h4>
            <div className="card-text">
              <p> Address & Area : {house.location} </p>
              <p> Flat Size : 3000 sq Feet </p>
              <p> Floor : C1(3rd Floor) (6 storied Building) (south facing unit) </p>
              <p> Room Category : 3 large Bed rooms with 3 verandas, spacious Drawing, Dining & Family living room </p>
              <p> Facilities : 1 modern lift. Modern Amenities & Semi Furnished</p>
              <p>
                {" "}
                Additional Facilities : Electricity with full generator load.
              </p>
            </div>
          </div>
          <div className="col-md-5">
           
            <form onSubmit={handleSubmit} className="booking-area">
              <input
                name="name"
                className="form-control"
                placeholder=" your name"
                onBlur={handleBlur}
                required
              />{" "}
              <br />
              <input
                name="email"
                className="form-control"
                placeholder=" your email"
                onBlur={handleBlur}
                required
              />{" "}
              <br />
              <input
                onBlur={handleBlur}
                type="number"
                name="phone"
                className="form-control"
                placeholder="Phone number"
                required
              />{" "}
              <br />
              <textarea
                name="massage"
                className="form-control"
                cols="20"
                rows="5"
                
                placeholder="Message"
                onBlur={handleBlur}
                required
              ></textarea>{" "}
              <br />
              <button type="submit" className="booking">
                Request Booking
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseDetails;
