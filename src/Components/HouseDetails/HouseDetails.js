import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { HouseContext } from '../../App';
import FakeData from '../FakeData/FakeData';
import './HouseDetails.css'

const HouseDetails = () => {
    const { houseId } = useParams();
    const [house, setHouse] = useContext(HouseContext);
    setHouse(houseId);
  
    const [houses, setHouses] =useState({});
    const {id, img ,houseName,img1,img2,img3,img4,price,summery,rent,serviceCharge,securityDeposit,flat,address,flatSize,floor,roomCatagori,facilities, additional} = houses;

       useEffect(() => {
        const selectedHouse = FakeData.find((houseinfo) => houseinfo.id == houseId );
        setHouses(selectedHouse);
      }, [houseId]);

      /// react hook from
      const { register, handleSubmit, errors } = useForm();

      const onSubmit= data =>{
        console.log(data);
    } 

    return (
        <div>
        <div className='background'>
            <h1 style={{paddingTop:'120px',paddingBottom:'120px'}} className='text-white text-center'>Apartment</h1>  
        </div>
         <div className="container">
           <div className="row">
               <div className="col-md-7">
                   <img style={{width:'100%'}} src={img} alt=""/>

                <div className="row mt-3">
                   <div className="col-md-3">
                     <img style={{width:'100%',paddingBottom:'10px'}}   src={img1} alt=""/>
                   </div>
                   <div className="col-md-3">
                       <img style={{width:'100%',paddingBottom:'10px'}} src={img2} alt=""/>
                   </div>
                   <div className="col-md-3">
                       <img style={{width:'100%',paddingBottom:'10px'}}  src={img3} alt=""/>
                   </div>
                   <div className="col-md-3">
                       <img style={{width:'100%',paddingBottom:'10px'}}  src={img4} alt=""/>
                   </div>
               </div>
                 <div className="row">
                     <div className="col-md-10">
                        <h2 style={{color:'#275a53',fontWeight:'bold'}}>{houseName} </h2>
                     </div>
                     <div className="col-md-2">
                         <h2 style={{color:'#275a53',fontWeight:'bold'}}> {price} </h2>
                     </div>
                 </div>
                 <p className='card-text mb-5'> {summery} </p>
                 <h4 style={{color:'rgb(22, 49, 38)',fontWeight:"bold",paddingBottom:'10px'}}>Price Details</h4>
                 <div className="card-text mb-5">
                 <p > Rent/Month : {rent} </p>
                 <p > Service Charge: {serviceCharge} </p>
                 <p >Security Deposit :{securityDeposit} </p>
                 <p >Flat : {flat}</p>
             </div>
               
             <h4 style={{color:'rgb(22, 49, 38)',fontWeight:"bold",paddingBottom:'10px'}}>Property Details</h4>
                 <div className="card-text">
                 <p > Address & Area  : {address} </p>
                 <p > Flat Size : {flatSize} </p>
                 <p  > Floor :{floor} </p>
                 <p > Additional : {additional}</p>
                 <p > Room Catagori  : {roomCatagori}</p>
                 <p > Facilities : {facilities}</p>
             </div>

               </div>
               <div className="col-md-5">
               <form className="booking-aria" onSubmit={handleSubmit(onSubmit)}>
<input name="name"  ref={register({ required: true })} className='form-control' placeholder=" your name"/> <br/>
{errors.name && <span className="error">Name is required</span>}

<input name="email"   ref={register({ required: true })} className='form-control' placeholder=" your email" /> <br/> 
{errors.email && <span className="error">Email is required</span>}

<input type='number' name='number'  ref={register({ required: true })} className='form-control' placeholder="Phone" /> <br/> 
{errors.number && <span className="error">number is required</span>}

<textarea name="massage"  ref={register({ required: true })} className="form-control" cols="20" rows="5" required placeholder="Message"></textarea> <br/>
{errors.massage && <span className="error">maessage is required</span>}
   

<button className='booking'type="submit">Request Booking</button>
</form>
               </div>
           </div>
        </div>
      </div>
    );
};

export default HouseDetails;