import styled from 'styled-components';

export const Container = styled('div')`
  margin-top: 54px;
  height: 136px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(p) => p.theme.lightBlue};
`;

export const List = styled('ul')`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 55px;
  list-style: none;
`;
