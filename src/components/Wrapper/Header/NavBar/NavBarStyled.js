import styled from 'styled-components';

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

export const ItemContainer = styled('li')`
  cursor: pointer;
`;

export const TextStyled = styled('p')`
  color: ${(p) => p.theme.colors.darkText};
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`;
