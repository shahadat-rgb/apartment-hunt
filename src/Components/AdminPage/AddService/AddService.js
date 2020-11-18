import React, { useContext, useState } from "react";
import { UserContext } from "../../../App";
import SlideBar from "../SlideBar/SlideBar";

const AddService = () => {
  const [loggedInUser] = useContext(UserContext);
  const [rent, setRent] = useState({});
  const [file, setFile] = useState(null);
  console.log(loggedInUser);

  const handleSubmit = (e) => {
    const formData = new FormData();
    console.log(rent)
    formData.append("file", file);
    formData.append("title", rent.title);
    formData.append("price", rent.price);
    formData.append("bathroom", rent.bathroom);
    formData.append("bedroom", rent.bedroom);
    formData.append("location", rent.location);
    formData.append("userName", loggedInUser.name);
    formData.append("userEmail", loggedInUser.email);
    console.log(formData);

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

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  return (
    <div className="row">
      <SlideBar></SlideBar>
      <div className="col-md-9 mt-3">
        <div className="row">
          <div className="col-md-7 mb-3 ml-5 mt-3">
            <h4 style={{ fontWeight: "bold" }}> Add Rent</h4>
          </div>
          <div className="col-md-4 mt-3">
            <h5 style={{ fontWeight: "bolder" }}> {loggedInUser.name} </h5>
          </div>
        </div>
        <div className="Service-Container">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-5">
                <div className="form-Field ml-5 mt-3">
                  <label htmlFor="fname">Service title</label>
                  <br></br>
                  <input
                    style={{ width: "350px" }}
                    onBlur={handleBlur}
                    name="title"
                    type="text"
                    placeholder="Service title"
                    required
                  />
                  <br />
                </div>
              </div>
              

              <div className="col-md-5 mt-3 pl-3 ml-5">
                <label htmlFor="">Price</label>
                <br />
                <input
                  onBlur={handleBlur}
                  type="text"
                  className="form-Field"
                  name="price"
                  placeholder="Enter price"
                  required
                />
              </div>
              <div className="col-md-5 mt-3 pl-3 ml-5">
                <label htmlFor="">location</label>
                <br />
                <input
                  onBlur={handleBlur}
                  type="text"
                  className="form-Field"
                  name="location"
                  placeholder="Enter your location"
                  required
                />
              </div>
              <div className="col-md-5 mt-3 pl-3">
                <label htmlFor="">No of Bedroom</label>
                <br />
                <input
                  onBlur={handleBlur}
                  type="text"
                  className="form-Field"
                  name="bedroom"
                  placeholder="Enter No of bedroom"
                  required
                />
              </div>
              <div className="col-md-5 mt-3 pl-3 ml-5">
                <label htmlFor="">No of Bathroom</label>
                <br />
                <input
                  onBlur={handleBlur}
                  type="text"
                  className="form-Field"
                  name="bathroom"
                  placeholder="Enter no of bathroom"
                  required
                />
              </div>
              <div className="col-md-5 mt-3">
                <div className="form-Field">
                  <label htmlFor="Icon">Icon</label>
                  <br />
                  <input
                    onChange={handleFileChange}
                    type="file"
                    id="Icon"
                    placeholder="Image"
                    required
                  />
                </div>
              </div>
              
            </div>
            <div style={{ textAlign: "left" }}>
              <button type="submit" className="btn btn-success ml-5 mt-3">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
