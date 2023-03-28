import styled from 'styled-components';

export const FooterContainer = styled('div')`
  height: 420px;
  background-color: ${(p) => p.theme.lightBlue};
  padding: 25px 60px;
`;

export const Container = styled('div')`
  display: flex;
  /* justify-content: space-between; */
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
  margin-left: 100px;
`;
export const TitleCategories = styled('p')`
  margin-bottom: 13px;
  font-family: 'Poppins-SemiBold';
  font-style: normal;
  font-weight: 600;
  font-size: 19.38px;
  line-height: 29px;
  color: #1b5a7d;
`;

export const ListCategories = styled('ul')`
  li {
    font-style: normal;
    font-weight: 400;
    font-size: 19.38px;
    line-height: 29px;
    color: #1b5a7d;
    transition: ${(p) => p.theme.transition};
    cursor: pointer;
    &:hover,
    &:focus {
      transform: scale(1.05);
      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #eda415, 0 0 30px #eda415, 0 0 40px #eda415,
        0 0 55px #eda415, 0 0 75px #eda415, 2px 2px 2px rgba(237, 164, 21, 0);
    }
    :not(:last-child) {
      margin-bottom: 8px;
    }
  }
`;
