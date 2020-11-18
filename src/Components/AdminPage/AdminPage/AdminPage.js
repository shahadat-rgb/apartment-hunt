import React, {  useContext, useEffect, useState } from "react";
import "./AdminPage.css";
import ServiceList from "../ServiceList/ServiceList";
import SlideBar from "../SlideBar/SlideBar";
import { UserContext } from "../../../App";


const AdminPage  = () => {
  const [loggedInUser] = useContext(UserContext);
  console.log(loggedInUser);
  const [serviceList, setServiceList] = useState([]);
  useEffect(() => {
    fetch("https://sleepy-everglades-57765.herokuapp.com/getBooking")
    .then((res) => res.json())
    .then((data) => setServiceList(data))
  },[])

  console.log(serviceList);
  return (
    <div className="row">
      <SlideBar></SlideBar>
      <div className="col-md-10 mt-3">
        <div className="row">
          <div className="col-md-7 mb-3 ml-5 mt-3">
            <h4>Rent List</h4>
          </div>
          <div className="col-md-4 mt-3">
            <h5 style={{ fontWeight: "bolder" }}> {loggedInUser.name} </h5>
          </div>
        </div>
        <div className="Service-Container pt-3">
          <div className="Headline row ml-5 mr-5 mb-3 mt-3 pl-3 pt-3">
            <p className="col-md-2 mr-3">Name</p>
            <p className="col-md-2 mr-5">Email ID</p>
            <p className="col-md-2 mr-3 ml-3">Phone no</p>
            <p className="col-md-2 mr-3">Message</p>
            <p className="col-md-2 ml-5">Status</p>
          </div>
          <div className="Headline row ml-5 mr-5 mb-3 mt-3 pl-3 pt-3">
            {serviceList.map((data) => (
              <ServiceList data={data} key={data._id}></ServiceList>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;