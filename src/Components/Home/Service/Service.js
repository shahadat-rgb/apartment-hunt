import React from 'react';
import apartment1 from "../../../image/logos/apartment1.png"
import apartment2 from "../../../image/logos/apartment2.png"
import apartment3 from "../../../image/logos/apartment3.png"
const Service = () => {
  return (
    <div className='container'>
         <div className="text-center mt-5 mb-5">
             <h5 style={{color:'rgba(52, 73, 63, 0.986)rgba(52, 73, 70, 0.986)',marginTop:'20px'}}>Service</h5>
             <h2 style={{color:'rgb(22, 49, 38)',fontWeight:"bold"}}>We'are an agency tailored to all     </h2>
             <h2 style={{color:'rgb(22, 49, 38)',fontWeight:"bold"}}>Clients needs that always delivers.  </h2>
         <div className="row mt-5">
           <div className="col-md-4">
               <img style={{height:'100px'}} src={apartment1} alt=""/>
               <h3 style={{color:'#275a53',fontWeight:'bold'}} className='mt-2 mb-3'>Wide range og properties </h3>
               <p className='font-wight'>with a robust selection of popular properties on hand as well as leading properties erties from experts.</p>
           </div>
           <div className="col-md-4">
               <img style={{height:'100px'}} src={apartment2} alt=""/>
               <h3 style={{color:'#275a53',fontWeight:'bold'}} className='mt-2 mb-3'>Financing made Easy</h3>
               <p className='font-wight'>with a robust selection of popular properties on hand as well as leading properties erties from experts.</p>
           </div>
           <div className="col-md-4 text-center">
               <img style={{height:'100px'}} src={apartment3} alt=""/>
               <h3 style={{color:'#275a53',fontWeight:'bold'}} className='mt-2 mb-3'>Trusted by Thousand</h3>
               <p className='font-wight'>with a robust selection of popular properties on hand as well as leading properties erties from experts.</p>
           </div>
         </div>

        </div>
   </div>
  );
};

export default Service;