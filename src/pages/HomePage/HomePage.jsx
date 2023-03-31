import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCategories } from '../../redux/porducts/operations';
import Banner from '../../components/Banner/Banner';
import Benefits from '../../components/Benefits/Benefits';
import { Categories } from '../../components/Categories/Categories';
import { Slider } from '../../components/Slide/Slider';
import { SliderFeedbacks } from '../../components/SliderFeedbacks/SliderFeedbacks';

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

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
