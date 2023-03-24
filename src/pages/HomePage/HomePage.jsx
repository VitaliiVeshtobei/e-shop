import React from 'react';
import Banner from '../../components/Banner/Banner';
import Benefits from '../../components/Benefits/Benefits';
import Brands from '../../components/Brands/Brands';
import { Categories } from '../../components/Categories/Categories';

const HomePage = () => {
  return (
    <div>
      <Categories />
      <Banner />
      <Benefits />
      <Brands />
    </div>
  );
};

export default HomePage;
