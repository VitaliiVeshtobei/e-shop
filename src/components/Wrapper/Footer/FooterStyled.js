import styled from 'styled-components';

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

// export const ListTextStyled = styled('ul')`
//   list-style: none;
//   display: flex;
//   justify-content: center;
//   gap: 227px;
//   li > span {
//     display: block;
//     font-family: 'Poppins-SemiBold';
//     font-weight: 600;
//     font-size: 19.38px;
//     line-height: 29px;
//     color: #1b5a7d;
//     margin-bottom: 13px;
//   }
//   li > p {
//     display: flex;
//     align-items: center;
//     font-weight: 400;
//     font-size: 19.38px;
//     line-height: 29px;
//     color: #1b5a7d;
//     &:not(:last-child) {
//       margin-bottom: 15px;
//     }
//     ::before {
//       /* position: absolute; */
//       content: '';
//       display: block;
//       border-radius: 50%;
//       margin-right: 15px;
//       width: 10px;
//       height: 10px;
//       background-color: #d9d9d9;
//     }
//   }
// `;

export const CategoriesContainer = styled('div')`
  /* margin-right: 190px; */
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
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 29px;
    color: ${(p) => p.theme.colors.lightText};
    transition: transform ${(p) => p.theme.transition}, text-shadow ${(p) => p.theme.transition};
    cursor: pointer;
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
  }
  svg {
    margin-right: 16px;
    width: 30px;
    height: 30px;
    stroke: ${(p) => p.theme.colors.smoke};
    stroke-width: 1px;
  }
  p {
    font-weight: 700;
    font-size: 20px;
    line-height: 1.25;
    color: ${(p) => p.theme.colors.smoke};
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
