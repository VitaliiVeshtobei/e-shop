import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';

export const ListCategoriesContainer = styled('div')`
  position: absolute;
  z-index: 2;
  margin-left: 63px;
  overflow: hidden;
  box-sizing: border-box;
  transition: height ${(p) => p.theme.transition};
  height: ${(p) => (p.showCategories ? '100%' : '0')};
  width: 375px;
`;

export const ListCategories = styled('ul')`
  background-color: ${(p) => p.theme.colors.navbar};
  padding: 30px;
  border: 0.983537px solid ${(p) => p.theme.colors.border};
  border-top: none;
`;

export const ItemCategories = styled('li')`
  cursor: pointer;
  p {
    transition: ${(p) => p.theme.transition};
    &:hover,
    &:focus {
      transform: scale(1.05);
      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #eda415, 0 0 30px #eda415, 0 0 40px #eda415,
        0 0 55px #eda415, 0 0 75px #eda415, 2px 2px 2px rgba(237, 164, 21, 0);
    }
    color: ${(p) => p.theme.colors.darkText};
  }
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Backdrop = styled.div`
  z-index: 1;
  position: absolute;
  left: 0;
  height: ${(p) => (p.showCategories ? '100%' : '0')};
  width: 100%;

  background-color: rgba(0, 0, 0, 0.4);

  transition: opacity 6000ms ease 0s, height 400ms ease 0s;

  opacity: ${(p) => (p.showCategories ? '1' : '0')};
`;
