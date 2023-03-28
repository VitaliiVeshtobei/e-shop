import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Item = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 315px;
  height: 315px;
  border: 1px solid #b6b6b6;
  border-radius: 20px;
  margin: 15px;
  cursor: pointer;
  transition: transform 300ms ease, box-shadow 300ms ease;

  &:hover,
  &:focus {
    transform: scale(1.05);
    -webkit-box-shadow: 0px 3px 26px -1px #000000;
    box-shadow: 0px 3px 26px -1px #000000;
    outline: transparent;
  }

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.44;

    color: #003f62;
  }
`;

export const Img = styled.img`
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 10px;
`;
