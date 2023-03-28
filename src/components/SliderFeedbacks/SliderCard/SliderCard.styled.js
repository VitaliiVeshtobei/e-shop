import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Item = styled.li`
  width: 440px;
  height: 242px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const LinkItem = styled(NavLink)`
  display: block;
  cursor: pointer;
  width: 100%;
  height: 100%;
  text-decoration: none;
  padding: 16px;
  overflow: hidden;
  border: 1px solid #bababa;
  border-radius: 20px;

  cursor: pointer;
  transition: transform 300ms ease, box-shadow 300ms ease;

  &:hover,
  &:focus {
    transform: scale(1.03);
    -webkit-box-shadow: 0px 3px 12px -1px #000000;
    box-shadow: 0px 3px 12px -1px #000000;
    outline: transparent;
  }
`;

export const Box = styled.div`
  position: relative;
  overflow: hidden;
  background: #e2f4ff;
  border-radius: 19px;
  color: #003f62;
  height: 92px;
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    position: absolute;
    overflow: hidden;
    top: 15px;
    left: 25px;
    right: 25px;
    bottom: 15px;
    :hover,
    :focus {
      overflow: scroll;
      overflow-x: hidden;
      text-overflow: ellipsis;
    }
    ::-webkit-scrollbar {
      background-color: transparent;
      width: 7px;
    }
    ::-webkit-scrollbar-thumb {
      width: 2px;
      height: 4px;
      border-radius: 3px;
      background-color: ${(p) => p.theme.blue};
    }

    /* ::-webkit-scrollbar,
    ::-moz-scrollbar,
    ::-ms-scrollbar {
      width: 5px;
      background-color: red;
    }
    ::-webkit-scrollbar-thumb,
    ::-moz-scrollbar-thumb,
    ::-ms-scrollbar-thumb {
      border-radius: 1px;
      background-color: red;
    }
    ::-webkit-scrollbar-track,
    ::-moz-scrollbar-track,
    ::-ms-scrollbar-track {
      background-color: red;
      width: 2px;
    } */
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 17px;

  h3 {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #003f62;
  }
`;

export const AvatarContainer = styled.div`
  width: 100px;
  height: 100px;
  border: 2px dashed #eda415;
  margin-right: 38px;
  padding: 7px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  img {
    border-radius: 50%;
  }
`;
