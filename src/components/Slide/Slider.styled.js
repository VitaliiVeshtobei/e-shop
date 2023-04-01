import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  padding: 37px 0 0;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  @media screen and (max-width: 903px) {
  }
`;

export const ImageContainer = styled.div`
  position: absolute;
  background-image: url(${(p) => p.src});
  background-size: content;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;

  opacity: 0;
  transition: opacity ease-in-out 1.5s;
  ${(p) => (p.anime ? `opacity: 1;` : 'opacity: 0;')}
`;

export const Div = styled.div`
  width: 420px;
  position: relative;
  overflow: hidden;
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
  padding: 10px;
`;

export const ButtonSlide = styled.button`
  cursor: pointer;
  width: 16px;
  height: 16px;
  background: ${(p) => (p.dot ? p.theme.colors.accent : `transparent`)};
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
