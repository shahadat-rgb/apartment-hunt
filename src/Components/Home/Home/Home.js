import React from 'react';
import Apartment from '../Apartment/Apartment';
import ApartmentList from '../ApartmentList/ApartmentList';
import Footer from '../ApartmentList/Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Apartment></Apartment>
            <Footer></Footer>
        </div>
    );
};

export default Home;