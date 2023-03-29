import React from 'react';
import Banner from '../../components/Banner/Banner';
import Benefits from '../../components/Benefits/Benefits';
import { Categories } from '../../components/Categories/Categories';
import { Slider } from '../../components/Slide/Slider';
import { SliderFeedbacks } from '../../components/SliderFeedbacks/SliderFeedbacks';

const HomePage = () => {
  return (
    <>
      <Slider />
      <Categories />
      <Banner />
      <Benefits />
      <SliderFeedbacks />
    </>
  );
};

export default HomePage;
