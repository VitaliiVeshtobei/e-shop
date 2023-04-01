import { SliderCard } from './SliderCard/SliderCard';
import { SlideBtnContainer, Wrapper } from './SliderFeedbacks.styled';
import image1 from '../../assets/images/feedback/Ellipse 2.jpg';
import image2 from '../../assets/images/feedback/Ellipse 3.jpg';
import image3 from '../../assets/images/feedback/Ellipse 4.jpg';
import { memo } from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const listFeedback = [
  {
    id: '1',
    name: 'Sara Tuto',
    avatar: image3,
    feedback:
      'Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque. Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.',
  },
  {
    id: '2',
    name: 'Deni Valesas',
    avatar: image1,
    feedback:
      'Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.',
  },
  {
    id: '3',
    name: 'Bob Vose',
    avatar: image2,
    feedback:
      'Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.',
  },

  {
    id: '4',
    name: 'Sara Vose',
    avatar: image2,
    feedback:
      'Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque. Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.',
  },
  {
    id: '5',
    name: 'Deni Vose',
    avatar: image1,
    feedback:
      'Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.',
  },
  {
    id: '6',
    name: 'Bob Tures',
    avatar: image3,
    feedback:
      'Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.',
  },

  {
    id: '7',
    name: 'Sara Vose',
    avatar: image3,
    feedback:
      'Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque. Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.',
  },
  {
    id: '8',
    name: 'Deni Zoros',
    avatar: image1,
    feedback:
      'Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.',
  },
  {
    id: '9',
    name: 'Bob Vose',
    avatar: image2,
    feedback:
      'Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.',
  },

  {
    id: '10',
    name: 'Sara Vose',
    avatar: image1,
    feedback:
      'Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque. Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.',
  },
  {
    id: '11',
    name: 'Deni Vose',
    avatar: image3,
    feedback:
      'Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.',
  },
  {
    id: '12',
    name: 'Bob Vose',
    avatar: image2,
    feedback: ' Phasellus tristique aenean at lorem sed scelerisque.',
  },

  {
    id: '13',
    name: 'Sara Vose',
    avatar: image1,
    feedback:
      'Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque. Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.',
  },
  {
    id: '14',
    name: 'Deni Vose',
    avatar: image2,
    feedback:
      'Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.',
  },
  {
    id: '15',
    name: 'Bob Vose',
    avatar: image3,
    feedback:
      'Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.',
  },

  {
    id: '16',
    name: 'Sara Sucos',
    avatar: image3,
    feedback:
      'Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque. ',
  },
  {
    id: '17',
    name: 'Dores Popen Das',
    avatar: image2,
    feedback:
      'Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.',
  },
];

export const SliderFeedbacks = memo(
  () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
          },
        },
      ],
    };

    return (
      <Wrapper>
        <Slider {...settings}>
          {listFeedback.map((item) => (
            <SliderCard
              key={item.id}
              name={item.name}
              feedback={item.feedback}
              avatar={item.avatar}
            />
          ))}
        </Slider>

        <SlideBtnContainer></SlideBtnContainer>
      </Wrapper>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.status === nextProps.status;
  }
);
