import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100px;
  background-color: ${(p) => p.theme.colors.accentBg};
`;

export const FormStyled = styled('form')`
  position: relative;
`;
export const InputStyled = styled('input')`
  width: 438px;
  height: 56px;
  padding: 17px 25px;
  /* background: ${(p) => p.theme.colors.lightText}; */
  border-radius: 20px;
  border: none;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  :focus {
    outline: none;
    border: none;
  }
`;

export const ButtonStyled = styled('button')`
  position: absolute;
  right: 0px;
  width: 132px;
  height: 56px;
  background: ${(p) => p.theme.colors.accent};
  border-radius: 20px;
  border: none;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: ${(p) => p.theme.colors.lightText};
  transition: ${(p) => p.theme.transition};
  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: 0px 3px 26px -1px ${(p) => p.theme.colors.darkHover};
  }
`;

export const CartContainer = styled('div')`
  transition: transform ${(p) => p.theme.transition};
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const NavLinkStyled = styled(NavLink)`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: ${(p) => p.theme.colors.lightText};
  position: relative;

  &::after {
    content: '';
    position: ${(p) => p.theme.line.position};
    bottom: ${(p) => p.theme.line.bottom};
    left: ${(p) => p.theme.line.left};
    transition: ${(p) => p.theme.line.transition};
    width: ${(p) => p.theme.line.width};
    height: ${(p) => p.theme.line.height};
    background-color: ${(p) => p.theme.line.bgColor};
  }

  &:hover::after {
    width: ${(p) => p.theme.lineHover.width};
  }
  &:focus::after {
    width: ${(p) => p.theme.lineHover.width};
  }
`;

export const CartCount = styled.div`
  border-radius: 50%;
  background-color: ${(p) => p.theme.colors.accent};
  color: ${(p) => p.theme.colors.lightText};
  width: 18px;
  height: 18px;
  font-size: 11px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
`;
