import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ListCategoriesContainer = styled('div')`
  position: absolute;
  z-index: 2;
  margin-left: 63px;
  overflow: hidden;
  box-sizing: border-box;

  width: 375px;
  animation-name: categories;
  animation-duration: 300ms;
  animation-timing-function: linear;
  animation-fill-mode: forwards;

  @keyframes categories {
    0% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const ListCategories = styled('ul')`
  font-size: 20px;
  background-color: ${(p) => p.theme.colors.navbar};
  padding: 30px;
  border: 0.983537px solid ${(p) => p.theme.colors.border};
  border-top: none;
`;

export const ItemCategories = styled('li')`
  transition: transform ${(p) => p.theme.transition};
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  position: relative;
  color: ${(p) => p.theme.colors.darkText};
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

export const Backdrop = styled.div`
  z-index: 1;
  position: absolute;
  left: 0;
  height: 100%;
  width: 100%;

  background-color: rgba(0, 0, 0, 0.4);

  animation-name: backdrop;
  animation-duration: 300ms;
  animation-timing-function: linear;
  animation-fill-mode: forwards;

  @keyframes backdrop {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
