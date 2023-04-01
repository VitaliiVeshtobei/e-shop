import { v4 as uuidv4 } from 'uuid';
import {
  ImageContainer,
  Wrapper,
  ContainerPrice,
  Title,
  Button,
  ButtonView,
  ButtonContainer,
  ButtonSlide,
  SlideBtnContainer,
  Div,
  SlideContainer,
} from './Slider.styled';
import image from '../../assets/images/Camera.png';
import image2 from '../../assets/images/Frame29.png';
import image3 from '../../assets/images/Frame.png';
import { useState } from 'react';
import { useEffect } from 'react';

const dataSlider = [
  {
    id: uuidv4(),
    title: 'Lorem ipsum',
    subTitle: 'Lorem',
    img: image2,
  },
  {
    id: uuidv4(),
    title: 'Lorem ipsum',
    subTitle: 'Lorem',
    img: image,
  },
  {
    id: uuidv4(),
    title: 'Lorem ipsum',
    subTitle: 'Lorem',
    img: image3,
  },
];

export const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    const newTimeoutId = setTimeout(() => {
      if (slideIndex === dataSlider.length) {
        console.log(slideIndex);
        setSlideIndex(1);
      } else {
        setSlideIndex(slideIndex + 1);
      }
    }, 5000);
    setTimeoutId(newTimeoutId);

    return () => clearTimeout(newTimeoutId);
  }, [slideIndex]);

  const moveDot = (index) => {
    console.log(index);
    setSlideIndex(index);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };

  return (
    <Wrapper>
      <Div>
        <Title>
          <span>Canon</span>
          <span> camera</span>
        </Title>
        <ButtonContainer>
          <Button type="button">Shop now</Button>
          <ButtonView type="button">View more</ButtonView>
        </ButtonContainer>
        <SlideBtnContainer>
          {dataSlider.map((item, index) => (
            <ButtonSlide
              key={item.id}
              onClick={() => moveDot(index + 1)}
              dot={slideIndex === index + 1}
            ></ButtonSlide>
          ))}
        </SlideBtnContainer>
      </Div>
      <SlideContainer>
        {dataSlider.map((item, index) => {
          return slideIndex === index + 1 ? (
            <ImageContainer
              anime={true}
              src={item.img}
              key={item.id}
            >
              <ContainerPrice>
                <p>only</p>
                <p>$89</p>
              </ContainerPrice>
            </ImageContainer>
          ) : (
            <ImageContainer
              anime={false}
              src={item.img}
              key={item.id}
            >
              <ContainerPrice>
                <p>only</p>
                <p>$89</p>
              </ContainerPrice>
            </ImageContainer>
          );
        })}
      </SlideContainer>
    </Wrapper>
  );
};
