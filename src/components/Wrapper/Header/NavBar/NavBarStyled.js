import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled('div')`
  display: flex;
  gap: 100px;
  align-items: center;
  padding: 0 63px;
  height: 70px;
  background-color: ${(p) => p.theme.colors.navbar};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export const ButtonCategories = styled('button')`
  border: none;
  height: 100%;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  background-color: ${(p) => p.theme.colors.accent};
  color: ${(p) => p.theme.colors.lightText};
  padding: 23px;
  cursor: pointer;
  transition: ${(p) => p.theme.transition};
  &:hover {
    box-shadow: 0px 3px 26px -1px ${(p) => p.theme.colors.darkHover};
  }
  &:focus {
    box-shadow: 0px 3px 26px -1px ${(p) => p.theme.colors.darkHover};
  }
`;
export const ListContainer = styled('ul')`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const NavLinkStyled = styled(NavLink)`
  cursor: pointer;
`;

export const TextStyled = styled('p')`
  color: ${(p) => p.theme.colors.darkText};
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`;

export const ListCategoriesContainer = styled('div')`
  position: absolute;
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
