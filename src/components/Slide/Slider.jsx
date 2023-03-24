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
} from './Slider.styled';
import image from '../../assets/images/Camera.png';

export const Slider = () => {
  return (
    <Wrapper>
      <div>
        <Title>
          <span>Canon</span>
          <span> camera</span>
        </Title>
        <ButtonContainer>
          <Button type="button">Shop now</Button>
          <ButtonView type="button">View more</ButtonView>
        </ButtonContainer>
        <SlideBtnContainer>
          <ButtonSlide type="button" />
          <ButtonSlide type="button" />
          <ButtonSlide type="button" />
        </SlideBtnContainer>
      </div>
      <div>
        <ImageContainer src={image}>
          <ContainerPrice>
            <p>only</p>
            <p>$89</p>
          </ContainerPrice>
        </ImageContainer>
      </div>
    </Wrapper>
  );
};
