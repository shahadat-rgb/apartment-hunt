import React from 'react';
// import { Button, Form, FormControl } from 'react-bootstrap';
import './Banner.css'
// import Rectangle13 from '../../../image/images/Rectangle13.png'
const Banner = () => {
  return (
<<<<<<< HEAD
    <div className='background'>
       <h2 style={{paddingTop:'130px'}}  className='text-white text-center'>FIND YOUR HOUSE RENT</h2>
      <div style={{paddingBottom:'180px'}} className="container d-flex justify-content-center">
        <nav class="navbar navbar-light">
          <form class="form-inline">
            <input
              class="form-control mr-sm-3"
              style={{paddingRight:'250px'}}
              type="search"
              placeholder="Search"
              aria-label="Search"
=======
    <main  className="banner">
    <div className="container ">
       <div className="pt-5">
          <h1 className="text-center text-uppercase  banner-rent"> Find your House Rent   </h1>
        <div className=" d-flex justify-content-center align-items-center mt-5">
          <Form inline textAlign="center">
            <FormControl
             /*  ref={inputValue} */
              style={{ width: "350px" }}
              type="text"
              placeholder="Search..."
              className="mr-sm-2"
              id="search"
>>>>>>> 723d5a0665d94247d992697828a8cfb4684c3818
            />
            <button class="find-btn my-2 my-sm-0" type="submit">
                 find now
            </button>
          </form>
        </nav>
      </div>
    </div>
  );
}

export default Banner;