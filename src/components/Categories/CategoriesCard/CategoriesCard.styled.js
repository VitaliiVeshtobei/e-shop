import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Item = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 315px;
  height: 315px;
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: 20px;
  margin: 15px;
  cursor: pointer;
  transition: transform ${(p) => p.theme.transition}, box-shadow ${(p) => p.theme.transition};

  &:hover,
  &:focus {
    transform: scale(1.05);
    -webkit-box-shadow: 0px 3px 26px -1px ${(p) => p.theme.colors.darkHover};
    box-shadow: 0px 3px 26px -1px ${(p) => p.theme.colors.darkHover};
    outline: transparent;
  }

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.44;

    color: ${(p) => p.theme.colors.scndDarkText};
  }
`;

export const Img = styled.img`
  box-sizing: border-box;
  /* width: 100%; */
  margin-bottom: 10px;
`;
