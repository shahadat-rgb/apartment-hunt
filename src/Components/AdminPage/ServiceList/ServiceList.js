import React from 'react';

const ServiceList = (props) => {
    const {fullName, email, phoneNumber, message} = props.data;
    console.log(fullName);
    return (
      <>
        <p className="col-md-1">{fullName}</p>
        <p className="col-md-3 mr-5">{email}</p>
        <p className="col-md-2 mr-3 ml-3">{phoneNumber}</p>
        <p className="col-md-2 mr-5">{message}</p>
        <div className="col-md-2">
          <select name="status">
            <option>Pending</option>
            <option>Done</option>
            <option>On going</option>
          </select>
        </div>
      </>
    );
};

export default ServiceList; 