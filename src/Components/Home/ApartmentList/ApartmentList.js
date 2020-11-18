import React from "react";
// import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker, faBed, faBath } from "@fortawesome/free-solid-svg-icons";
import "./ApartmentList.css"

const ApartmentList = ({ houseInfo }) => {
  //   const history = useHistory();
  console.log(houseInfo);

  return (
    <div>
      <div class="card">
        <div class="card-body">
          <img
            className="card-img-top"
            src={`http://localhost:5000/${houseInfo.image}`}
            alt=""
          />
          <br />
          <br />
          <h4
            style={{ color: "#275a53", fontWeight: "bold" }}
            class="card-title"
          >
            {houseInfo.title}
          </h4>
          <div style={{ float: "left" }}>
            <FontAwesomeIcon icon={faMapMarker} />
          </div>
          <p class="card-text pl-4">{houseInfo.location} </p>
          <div className="row">
            <div className="col-md-6">
              <p>
                <FontAwesomeIcon icon={faBed} />
                <span> {houseInfo.bedroom}</span> Bedrooms
              </p>
            </div>
            <div className="col-md-6">
              <p>
                <FontAwesomeIcon icon={faBath} />
                <span> {houseInfo.bathroom}</span> Bathrooms
              </p>
            </div>
          </div>
          <div className="row mt-3">
            <div className=" col-md-5">
              <h2 className="price"> ${houseInfo.price} </h2>
            </div>
            <div className=" ml-3 col-md-6">
              <button className="details-btn">details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentList;
