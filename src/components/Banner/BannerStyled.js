import styled from 'styled-components';

export const Container = styled('div')`
  position: relative;
  margin-top: 75px;
  img {
    display: block;
    width: 100%;
  }
`;

export const ContainerInfo = styled('div')`
  position: absolute;
  top: 103px;
  right: 149px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    color: ${(p) => p.theme.white};
    &:not(:last-child) {
      margin-bottom: 12px;
      font-weight: 700;
      font-size: 41px;
      line-height: 62px;
      color: #2e8fc5;
    }
  }
  button {
    &:not(:last-child) {
      margin-bottom: 36px;
    }
  }
  div {
    margin-bottom: 36px;
  }
`;

export const ButtonStyled = styled('button')`
  width: 134px;
  height: 35px;
  background: ${(p) => p.theme.orange};
  border-radius: 20px;
  border: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: ${(p) => p.theme.white};
  cursor: pointer;
  transition: ${(p) => p.theme.transition};
  &:hover,
  &:focus {
    box-shadow: 0px 3px 26px -1px #ffffff;
  }
`;
