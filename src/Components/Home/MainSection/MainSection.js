import React from 'react';
import Rent from '../Rent/Rent';
import Service from '../Service/Service';

const MainSection = () => {
    return (
         <div style={{backgroundColor:'rgba(170, 209, 185, 0.175)'}}>
            <Rent></Rent>
            <Service></Service>
        </div>
    );
};

export default MainSection;