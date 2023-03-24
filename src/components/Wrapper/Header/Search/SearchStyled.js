import styled from 'styled-components';

export const Container = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100px;
  background-color: ${(p) => p.theme.blue};
`;

export const FormStyled = styled('form')`
  position: relative;
`;
export const InputStyled = styled('input')`
  width: 438px;
  height: 56px;
  background: ${(p) => p.theme.white};
  border-radius: 20px;
  border: none;
`;

export const ButtonStyled = styled('button')`
  position: absolute;
  right: 0px;
  width: 132px;
  height: 56px;
  background: ${(p) => p.theme.orange};
  border-radius: 20px;
  border: none;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: ${(p) => p.theme.white};
  transition: ${(p) => p.theme.transition};
  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: 0px 3px 26px -1px #000000;
  }
`;

export const CartContainer = styled('div')`
  display: flex;
  align-items: center;
  cursor: pointer;
  p {
    margin-left: 8px;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: ${(p) => p.theme.white};
  }
`;
