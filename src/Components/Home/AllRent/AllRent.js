import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const AllRent = ({houseInfo}) => {  
    const history = useHistory();
    return (
        <div>
            <div class="card">
    <img class="card-img-top" style={{height:'200px'}} src={houseInfo.img} alt="Card image cap"/>
    <div class="card-body">
    <h4 style={{color:'#275a53',fontWeight:'bold'}} class="card-title">{houseInfo.houseName}</h4>
         <div style={{float:'left'}}>
         <img style={{height:'20px'}} src={houseInfo.picture} alt=""/>
         </div>
         <p class="card-text pl-4">{houseInfo.location} </p>
        <div className="row">
          <div className="col-md-6">
             <img style={{height:'20px'}}  src={houseInfo.cobi} alt=""/>
             <span className='pl-3 font-wight'>{houseInfo.bedroom} </span>
          </div>
          <div className="col-md-6">
           <img style={{height:'20px'}} src={houseInfo.photo} alt=""/>
          <span className='pl-3 font-wight'>{houseInfo.Bathroom} </span>
          </div>
          </div>
        <div className="mt-3">
        <span className='price'> {houseInfo.price} </span>
       <Link>
        <span> <button className="details-btn" onClick={() => history.push(`/houseDetails/${houseInfo.id}`)}>View Details</button> </span>
       </Link>
        </div>
    </div>
  </div>
        </div>
    );
};

export default AllRent;