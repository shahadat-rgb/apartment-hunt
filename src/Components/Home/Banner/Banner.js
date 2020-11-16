
import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import './Banner.css'
const Banner = () => {
  return (
    <main  className="banner">
    <div className="container ">
       <div className="pt-5">
          <h1 className="text-center text-uppercase  banner-rent"> Find Your House Rent </h1>
        <div className=" d-flex justify-content-center align-items-center mt-5">
          <Form inline textAlign="center">
            <FormControl
             /*  ref={inputValue} */
              style={{ width: "350px" }}
              type="text"
              placeholder="Search..."
              className="mr-sm-2"
              id="search"
            />
            <Button
              className="button"
              style={{
                borderRadius: "7px",
                padding: "8px 25px",
                cursor: "pointer",
              }}
             /*  onClick={handleSearch} */
            >
              Find Now
            </Button>
          </Form>
        </div>
       </div>
      </div>
    </main>
  );
}

export default Banner;