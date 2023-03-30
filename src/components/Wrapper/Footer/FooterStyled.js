import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const FooterContainer = styled('div')`
  height: 270px;
  background-color: ${(p) => p.theme.colors.accentBg};
  padding: 25px 60px;
`;

export const Container = styled('div')`
  display: flex;
  height: 216px;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled('div')`
  /* margin-right: 100px; */
  img {
    margin-bottom: 40px;
  }
  p {
    width: 310px;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: ${(p) => p.theme.colors.lightText};
    ::after {
      content: '';
      margin-top: 36px;
      margin-bottom: 25px;
      display: block;
      width: 100%;
      border: 1px solid ${(p) => p.theme.colors.border};
    }
  }
`;

export const CategoriesContainer = styled('div')`
  width: 450px;
`;

export const TitleCategories = styled('p')`
  margin-bottom: 21px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 29px;
  color: ${(p) => p.theme.colors.accent};
`;

export const ListCategories = styled('ul')`
  height: 140px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  li {
    transition: transform ${(p) => p.theme.transition};
    &:hover,
    &:focus {
      transform: scale(1.05);
    }
    &:not(:last-child) {
      margin-bottom: 15px;
    }
    &:not(:nth-last-child(-n + 3)) {
      margin-right: 150px;
    }
  }
`;

export const CategoriesLink = styled(NavLink)`
  font-weight: 400;
  font-size: 19px;
  line-height: 1.52;
  color: ${(p) => p.theme.colors.lightText};
  position: relative;
  &::after {
    content: '';
    position: ${(p) => p.theme.line.position};
    bottom: ${(p) => p.theme.line.bottom};
    left: ${(p) => p.theme.line.left};
    transition: ${(p) => p.theme.line.transition};
    width: ${(p) => p.theme.line.width};
    height: ${(p) => p.theme.line.height};
    background-color: ${(p) => p.theme.line.bgColor};
  }

  &:hover::after {
    width: ${(p) => p.theme.lineHover.width};
  }
  &:focus::after {
    width: ${(p) => p.theme.lineHover.width};
  }
`;

export const ContactsContainer = styled.div``;
export const ContactsList = styled.ul``;
export const ContactsItem = styled.li`
  margin-bottom: 28px;
  transition: transform ${(p) => p.theme.transition};
  display: flex;
  &:hover,
  &:focus {
    transform: scale(1.05);
  }

  a {
    display: flex;
    position: relative;
    font-size: 19px;
    line-height: 1.25;
    color: ${(p) => p.theme.colors.lightText};
  }
  svg {
    margin-right: 16px;
    width: 30px;
    height: 30px;
    stroke: ${(p) => p.theme.colors.smoke};
    stroke-width: 1px;
  }
  p {
  }
`;

export const ListIconsStyled = styled('ul')`
  list-style: none;
  display: flex;
  justify-content: start;
  gap: 40px;
  li {
    transition: transform ${(p) => p.theme.transition};
    &:hover,
    &:focus {
      transform: scale(1.05);
    }
  }
`;

export const ListIconsLink = styled.a`
  color: ${(p) => p.theme.colors.smoke};
  transition: color ${(p) => p.theme.transition};

  &:hover,
  &:focus {
    transform: scale(1.05);
    color: ${(p) => {
      switch (p.color) {
        case 'tg':
          return '#2AABEE';
        case 'vb':
          return '#7360F2';
        case 'wt':
          return '#25D366';
        default:
          return p.theme.colors.accent;
      }
    }};
  }

  svg {
    width: 30px;
    height: 30px;
  }
`;
