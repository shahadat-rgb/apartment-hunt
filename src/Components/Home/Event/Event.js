import React from 'react';
// import { useHistory } from 'react-router-dom';
import './Event.css'
import rectangle1 from "../../../image/images/Rectangle1.png"
import rectangle2 from "../../../image/images/Rectangle2.png"
import rectangle3 from "../../../image/images/Rectangle3.png"
import rectangle4 from "../../../image/images/Rectangle4.png"
import rectangle5 from "../../../image/images/Rectangle5.png"
import rectangle6 from "../../../image/images/Rectangle6.png"
import location from "../../../image/logos/location.png"
import bed from "../../../image/logos/bed.png"
import bath from "../../../image/logos/bath.png"
const Event = () => {
  // const history = useHistory();
  return (
    <div className="container">
        <div className="text-center mb-5">
             <h5 style={{color:'rgba(52, 73, 63, 0.986)rgba(52, 73, 70, 0.986)',marginTop:'20px'}}>House Rent</h5>
             <h2 style={{color:'rgb(48, 99, 92)',fontWeight:"bold"}}>Discover The Latest Rent</h2>
             <h2 style={{color:'rgb(48, 99, 92)',fontWeight:"bold"}}> Available Today</h2>
        </div>

        <div class="card-deck">
  <div class="card">
    <img class="card-img-top" src={rectangle1} alt="Card image cap"/>
    <div class="card-body">
      <h4 style={{color:'#275a53',fontWeight:'bold'}} class="card-title">Washington Avenue</h4>
         <div style={{float:'left'}}>
         <img style={{height:'20px'}} src={location} alt=""/>
         </div>
         <p class="card-text pl-4">Nasirabad H/S Chattogram</p>
        <div className="row">
          <div className="col-md-6">
             <img style={{height:'20px'}}  src={bed} alt=""/>
             <span className='pl-3 font-wight'>2 Bedrooms</span>
          </div>
          <div className="col-md-6">
           <img style={{height:'20px'}} src={bath} alt=""/>
          <span className='pl-3 font-wight'>2 Bathroom</span>
          </div>
          </div>
        <div className="mt-3">
        <span className='price'>$244</span>
        <span> <button className="details-btn">View Details</button></span>
        </div>
    </div>
  </div>

  <div class="card">
    <img class="card-img-top" src={rectangle2} alt="Card image cap"/>
    <div class="card-body">
      <h4 style={{color:'#275a53',fontWeight:'bold'}} class="card-title">Familly Appartment</h4>
         <div style={{float:'left'}}>
         <img style={{height:'20px'}} src={location} alt=""/>
         </div>
         <p class="card-text pl-4">Nasirabad H/S Chattogram</p>
        <div className="row">
          <div className="col-md-6">
             <img style={{height:'20px'}}  src={bed} alt=""/>
             <span className='pl-3 font-wight'>2 Bedrooms</span>
          </div>
          <div className="col-md-6">
           <img style={{height:'20px'}} src={bath} alt=""/>
          <span className='pl-3 font-wight'>2 Bathroom</span>
          </div>
          </div>
        <div className="mt-3">
        <span className='price'>$244</span>
        <span> <button className="details-btn">View Details</button></span>
        </div>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={rectangle3} alt="Card image cap"/>
    <div class="card-body">
      <h4 style={{color:'#275a53',fontWeight:'bold'}} class="card-title">Gorgeous House</h4>
         <div style={{float:'left'}}>
         <img style={{height:'20px'}} src={location} alt=""/>
         </div>
         <p class="card-text pl-4">Nasirabad H/S Chattogram</p>
        <div className="row">
          <div className="col-md-6">
             <img style={{height:'20px'}}  src={bed} alt=""/>
             <span className='pl-3 font-wight'>2 Bedrooms</span>
          </div>
          <div className="col-md-6">
           <img style={{height:'20px'}} src={bath} alt=""/>
          <span className='pl-3 font-wight'>2 Bathroom</span>
          </div>
          </div>
        <div className="mt-3">
        <span className='price'>$244</span>
        <span> <button className="details-btn">View Details</button></span>
        </div>
    </div>
  </div>
</div>
<br/>

<div class="card-deck">
<div class="card">
    <img class="card-img-top" src={rectangle4} alt="Card image cap"/>
    <div class="card-body">
      <h4 style={{color:'#275a53',fontWeight:'bold'}} class="card-title">luxary Villa</h4>
         <div style={{float:'left'}}>
         <img style={{height:'20px'}} src={location} alt=""/>
         </div>
         <p class="card-text pl-4">Nasirabad H/S Chattogram</p>
        <div className="row">
          <div className="col-md-6">
             <img style={{height:'20px'}}  src={bed} alt=""/>
             <span className='pl-3 font-wight'>2 Bedrooms</span>
          </div>
          <div className="col-md-6">
           <img style={{height:'20px'}} src={bath} alt=""/>
          <span className='pl-3 font-wight'>2 Bathroom</span>
          </div>
          </div>
        <div className="mt-3">
        <span className='price'>$244</span>
        <span> <button className="details-btn">View Details</button></span>
        </div>
    </div>
  </div>

  <div class="card">
    <img class="card-img-top" src={rectangle5} alt="Card image cap"/>
    <div class="card-body">
      <h4 style={{color:'#275a53',fontWeight:'bold'}} class="card-title">Epic Huda Falacio</h4>
         <div style={{float:'left'}}>
         <img style={{height:'20px'}} src={location} alt=""/>
         </div>
         <p class="card-text pl-4">Nasirabad H/S Chattogram</p>
        <div className="row">
          <div className="col-md-6">
             <img style={{height:'20px'}}  src={bed} alt=""/>
             <span className='pl-3 font-wight'>2 Bedrooms</span>
          </div>
          <div className="col-md-6">
           <img style={{height:'20px'}} src={bath} alt=""/>
          <span className='pl-3 font-wight'>2 Bathroom</span>
          </div>
          </div>
        <div className="mt-3">
        <span className='price'>$244</span>
        <span> <button className="details-btn">View Details</button></span>
        </div>
    </div>
  </div>

 <div class="card">
    <img class="card-img-top" src={rectangle6} alt="Card image cap"/>
    <div class="card-body">
      <h4 style={{color:'#275a53',fontWeight:'bold'}} class="card-title">Washington Avenue</h4>
         <div style={{float:'left'}}>
         <img style={{height:'20px'}} src={location} alt=""/>
         </div>
         <p class="card-text pl-4">Nasirabad H/S Chattogram</p>
        <div className="row">
          <div className="col-md-6">
             <img style={{height:'20px'}}  src={bed} alt=""/>
             <span className='pl-3 font-wight'>2 Bedrooms</span>
          </div>
          <div className="col-md-6">
           <img style={{height:'20px'}} src={bath} alt=""/>
          <span className='pl-3 font-wight'>2 Bathroom</span>
          </div>
          </div>
        <div className="mt-3">
        <span className='price'>$244</span>
        <span> <button className="details-btn">View Details</button></span>
        </div>
    </div>
  </div>
</div>
    
    </div>
 
  );
};

export default Event;



{/* <button className="mt-5" onClick={() => history.push('/service')}>event page</button> */}