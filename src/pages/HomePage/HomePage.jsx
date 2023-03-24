import React from 'react';
import Banner from '../../components/Banner/Banner';
import Benefits from '../../components/Benefits/Benefits';
import Brands from '../../components/Brands/Brands';
import { Categories } from '../../components/Categories/Categories';
import { Slider } from '../../components/Slide/Slider';

const HomePage = () => {
  return (
    <>
      <Slider />
      <Categories />
      <Banner />
      <Benefits />
      <Brands />
    </>

  );
};

export default HomePage;
