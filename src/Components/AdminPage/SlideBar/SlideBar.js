import React from 'react';
import logo from "../../../images/logos/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThList } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faUserCog } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SlideBar = () => {
    return (
      <>
        <div className="col-md-2 mt-3">
          <div className="m-3">
            <div className="mb-5 ml-3">
              <Link to="/">
                <img
                  style={{ width: "150px", height: "47px" }}
                  src={logo}
                  alt=""
                />
              </Link>
            </div>
            <div className="pt-5 ml-3 pl-3">
              <Link to="/admin">
                <p>
                  <FontAwesomeIcon icon={faThList} /> Rent List
                </p>
              </Link>
              <Link to="/addService">
                <p>
                  <FontAwesomeIcon icon={faPlus} /> Add Rent
                </p>
              </Link>
              <Link to="/makeAdmin">
                <p>
                  <FontAwesomeIcon icon={faUserCog} /> Make Admin
                </p>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
};

export default SlideBar;