import React, { useContext, useState } from "react";
import { UserContext } from "../../../App";
import SlideBar from "../SlideBar/SlideBar";
import './MakeAdmin.css'

const MakeAdmin = () => {
  const [loggedInUser ] = useContext(UserContext);

  const [admin, setAdmin] = useState({});
  

  const handleSubmit = (e) => {
    const formData = new FormData();
    formData.append("name", admin.name);
    formData.append("email", admin.email);
    formData.append("userName", loggedInUser.name);
    formData.append("userEmail", loggedInUser.email);

    console.log(formData);

    fetch("https://sleepy-everglades-57765.herokuapp.com/addAdmin", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        window.alert("Admin added successfully");
      })
      .catch((error) => {
        console.error(error);
      });

    e.preventDefault();
  };

  const handleBlur = (e) => {
    const newAdmin = { ...admin };
    newAdmin[e.target.name] = e.target.value;
    setAdmin(newAdmin);
  };

  
  return (
    <div className="row">
      <SlideBar></SlideBar>
      <div className="col-md-9 mt-3">
        <div className="row">
          <div className=" col-md-6 mb-3 ml-5 mt-3">
            <h4>Make Admin</h4>
          </div>
          <div className="col-md-4 mt-3">
            <h5 style={{ fontWeight: "bolder" }}> {loggedInUser.name} </h5>
          </div>
        </div>
        <div className="Order-Form pt-3 d-flex justify-content-center d-flex align-items-center">
          <div
            style={{ width: "600px", border: "1px solid red" }}
            className=" p-5"
          >
            <h2 className="pl-5 ml-5">Make a New Admin</h2>
            <form onSubmit={handleSubmit}>
              <input
                onBlur={handleBlur}
                className="input mb-3"
                type="text"
                name="name"
                placeholder="Name"
                required
              />
              <input
                onBlur={handleBlur}
                className="input mb-3"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <br />
              <div className="d-flex justify-content-center ">
                <button type="submit" className="send-btn">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
