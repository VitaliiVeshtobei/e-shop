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
