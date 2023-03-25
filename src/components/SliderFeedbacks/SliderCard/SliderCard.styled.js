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

  border: 1px solid #bababa;
  border-radius: 20px;

  cursor: pointer;
  transition: transform 300ms ease, box-shadow 300ms ease;

  &:hover,
  &:focus {
    transform: scale(1.05);
    -webkit-box-shadow: 0px 3px 12px -1px #000000;
    box-shadow: 0px 3px 12px -1px #000000;
  }
`;
export const LinkItem = styled(NavLink)`
  display: block;
  cursor: pointer;
  width: 100%;
  height: 100%;
  text-decoration: none;
  padding: 16px;
  overflow: hidden;
`;

export const Box = styled.div`
  position: relative;
  overflow: hidden;
  background: #e2f4ff;
  border-radius: 19px;
  color: #003f62;
  height: 82px;
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    position: absolute;
    top: 15px;
    left: 25px;
    right: 25px;
    bottom: 15px;
    overflow: scroll;
    text-overflow: ellipsis;
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 27px;

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
  background-image: url(${(p) => p.image});
  background-size: cover;
  background-repeat: no-repeat;
  margin-right: 38px;
  padding: 7px;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  img {
    border-radius: 50%;
  }
`;
