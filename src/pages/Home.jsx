import React from 'react';
import Banner from '../components/Banner/Banner';
import Explore from '../components/Explore/Explore';
import Navbar from '../components/Navbar/Navbar';

const Home = () => {
    return (
        <div>
           <Navbar />
           <Banner />
           <Explore />
        </div>
    );
};

export default Home;