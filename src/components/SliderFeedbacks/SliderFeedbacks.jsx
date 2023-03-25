import { SliderCard } from './SliderCard/SliderCard';
import { ButtonSlide, List, SlideBtnContainer, Wrapper } from './SliderFeedbacks.styled';
import image1 from '../../assets/images/feedback/Ellipse 2.jpg';
import image2 from '../../assets/images/feedback/Ellipse 3.jpg';
import image3 from '../../assets/images/feedback/Ellipse 4.jpg';

const listFeedback = [
  {
    id: '1',
    name: 'Sara Vose',
    avatar: image1,
    feedback:
      'Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque. Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.',
  },
  {
    id: '2',
    name: 'Deni Vose',
    avatar: image2,
    feedback:
      'Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.',
  },
  {
    id: '3',
    name: 'Bob Vose',
    avatar: image3,
    feedback:
      'Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.',
  },
];

export const SliderFeedbacks = () => {
  return (
    <Wrapper>
      <List>
        {listFeedback.map((item) => (
          <SliderCard
            key={item.id}
            name={item.name}
            feedback={item.feedback}
            avatar={item.avatar}
          />
        ))}
      </List>
      <SlideBtnContainer>
        <ButtonSlide type="button" />
        <ButtonSlide type="button" />
        <ButtonSlide type="button" />
      </SlideBtnContainer>
    </Wrapper>
  );
};
