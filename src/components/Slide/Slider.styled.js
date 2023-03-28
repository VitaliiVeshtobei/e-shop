import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  padding: 37px 0 0;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const ImageContainer = styled.div`
  position: relative;
  background-image: url(${(p) => p.src});
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Div = styled.div`
  width: 420px;

  @media screen and (min-width: 419px) {
    height: 325px;
  }
`;

export const ContainerPrice = styled.div`
  position: absolute;
  bottom: 40px;
  right: 10px;
  width: 120px;
  height: 120px;
  background-color: ${(p) => p.theme.colors.corrasion};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  p {
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 32px;
    color: ${(p) => p.theme.colors.lightText};
  }
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 900;
  font-size: 43px;
  line-height: 64px;
  display: flex;
  flex-direction: column;
  color: ${(p) => p.theme.colors.darkText};
  margin-bottom: 35px;
`;

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;
  border: transparent;
  width: 144px;
  height: 61px;
  background: ${(p) => p.theme.colors.accent};
  border-radius: 20px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${(p) => p.theme.colors.lightText};
  transition: transform ${(p) => p.theme.transition}, box-shadow ${(p) => p.theme.transition};
  &:hover,
  &:focus {
    transform: scale(1.05);
    -webkit-box-shadow: 0px 3px 16px -1px ${(p) => p.theme.colors.darkHover};
    box-shadow: 0px 3px 16px -1px ${(p) => p.theme.colors.darkHover};
    outline: transparent;
  }
`;

export const ButtonView = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;
  width: 144px;
  height: 61px;
  border: 1px solid ${(p) => p.theme.colors.corrasion};
  border-radius: 20px;
  margin-left: 20px;
  background-color: transparent;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${(p) => p.theme.colors.corrasion};

  transition: transform ${(p) => p.theme.transition}, box-shadow ${(p) => p.theme.transition};
  &:hover,
  &:focus {
    transform: scale(1.05);
    -webkit-box-shadow: 0px 3px 26px -1px ${(p) => p.theme.colors.darkHover};
    box-shadow: 0px 3px 16px -1px ${(p) => p.theme.colors.darkHover};
    outline: transparent;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
`;

export const SlideBtnContainer = styled.div`
  display: flex;
  margin-left: 120px;
`;

export const ButtonSlide = styled.button`
  cursor: pointer;
  width: 16px;
  height: 16px;
  border: 1px solid ${(p) => p.theme.colors.corrasion};
  border-radius: 50%;
  transition: transform ${(p) => p.theme.transition}, box-shadow ${(p) => p.theme.transition},
    background-color ${(p) => p.theme.transition};

  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.colors.accent};
    transform: scale(1.05);
    -webkit-box-shadow: 0px 3px 6px -1px ${(p) => p.theme.colors.darkHover};
    box-shadow: 0px 3px 6px -1px ${(p) => p.theme.colors.darkHover};
    border: transparent;
    outline: transparent;
  }

  :not(:last-child) {
    margin-right: 10px;
  }
`;
