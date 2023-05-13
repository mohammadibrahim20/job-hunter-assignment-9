import React from 'react';
import Banner from '../Banner/Banner';
import FeutureJob from '../FeutureJob/FeutureJob';
import JobCatagories from '../JobCatagories/JobCatagories';

const Home = () => {
    return (
        <div>
          <Banner/>
          <JobCatagories/>
          <FeutureJob/>  
          
        </div>
    );
};

export default Home;