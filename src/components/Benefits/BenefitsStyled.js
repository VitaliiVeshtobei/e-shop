import styled from 'styled-components';

export const Container = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 155px;
  margin-top: 75px;
  background-color: ${(p) => p.theme.colors.accentBg};
  border-radius: 20px;
`;
export const List = styled('ul')`
  display: flex;
  justify-content: center;
  gap: 110px;
  list-style: none;
  li {
    display: flex;
    align-items: center;
    p {
      font-weight: 400;
      font-size: 18.09px;
      line-height: 27px;
      color: ${(p) => p.theme.colors.lightText};
      &:not(:last-child) {
        font-weight: 600;
        font-size: 22.09px;
        line-height: 33px;
        color: ${(p) => p.theme.colors.lightText};
      }
    }
  }
`;

export const ImageContainer = styled('div')`
  margin-right: 31px;
`;
