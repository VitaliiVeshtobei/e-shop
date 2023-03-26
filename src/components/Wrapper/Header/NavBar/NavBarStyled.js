import styled from 'styled-components';

export const Container = styled('div')`
  display: flex;
  gap: 100px;
  align-items: center;
  padding: 0 63px;
  height: 70px;
  background-color: #f4f4f4;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export const CategoriesContainer = styled('div')`
  background-color: ${(p) => p.theme.orange};
  color: ${(p) => p.theme.white};
  padding: 23px;
  cursor: pointer;
  transition: ${(p) => p.theme.transition};
  &:hover,
  &:focus {
    box-shadow: 0px 3px 26px -1px #000000;
  }
`;
export const ListContainer = styled('div')`
  display: flex;
  align-items: center;
  gap: 30px;
  p {
    color: #3a3a3a;
  }
`;

export const ListCategoriesContainer = styled('div')`
  position: absolute;
  margin-left: 63px;
  overflow: hidden;
  box-sizing: border-box;
  transition: height 0.5s ease-in;
  height: ${(p) => (p.showCategories ? '100%' : '0')};
  width: 375px;
`;
export const ListCategories = styled('ul')`
  background-color: #f4f4f4;
  padding: 30px;
  border: 0.983537px solid #b6b6b6;
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
    color: #3a3a3a;
  }
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
