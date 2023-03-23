import styled from 'styled-components';

export const FooterContainer = styled('div')`
  height: 420px;
  background-color: ${(p) => p.theme.lightBlue};
  padding: 25px 60px;
`;

export const Container = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled('div')`
  img {
    margin-bottom: 40px;
  }
  p {
    width: 183px;
    font-weight: 400;
    font-size: 16.38px;
    line-height: 25px;
    color: #1b5a7d;
    ::after {
      content: '';
      margin-top: 36px;
      margin-bottom: 25px;
      display: block;
      width: 100%;
      border: 1px solid #9d9d9d;
    }
  }
`;

export const ListIconsStyled = styled('ul')`
  list-style: none;
  display: flex;
  justify-content: start;
  gap: 40px;

  li {
    cursor: pointer;
    color: #3b3b3b;
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const ListTextStyled = styled('ul')`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 227px;
  li > span {
    display: block;
    font-family: 'Poppins-SemiBold';
    font-weight: 600;
    font-size: 19.38px;
    line-height: 29px;
    color: #1b5a7d;
    margin-bottom: 13px;
  }
  li > p {
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 19.38px;
    line-height: 29px;
    color: #1b5a7d;
    &:not(:last-child) {
      margin-bottom: 15px;
    }
    ::before {
      /* position: absolute; */
      content: '';
      display: block;
      border-radius: 50%;
      margin-right: 15px;
      width: 10px;
      height: 10px;
      background-color: #d9d9d9;
    }
  }
`;
