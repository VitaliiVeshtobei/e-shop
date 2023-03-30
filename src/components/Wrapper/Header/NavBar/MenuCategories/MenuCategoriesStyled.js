import styled from 'styled-components';

export const ListCategoriesContainer = styled('div')`
  position: absolute;
  z-index: 2;
  margin-left: 63px;
  overflow: hidden;
  box-sizing: border-box;

  width: 375px;
  animation-name: categories;
  animation-duration: 300ms;
  animation-timing-function: linear;
  animation-fill-mode: forwards;

  @keyframes categories {
    0% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const ListCategories = styled('ul')`
  font-size: 20px;
  background-color: ${(p) => p.theme.colors.navbar};
  padding: 30px;
  border: 0.983537px solid ${(p) => p.theme.colors.border};
  border-top: none;
`;

export const ItemCategories = styled('li')`
  cursor: pointer;

  p::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    transition: width 800ms ease;
    width: 0;
    height: 3px;
    background-color: ${(p) => p.theme.colors.accent};
  }

  p:hover::after {
    width: 100%;
  }
  p:focus::after {
    width: 100%;
  }
  p {
    position: relative;
    display: inline;
    color: ${(p) => p.theme.colors.darkText};
  }

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Backdrop = styled.div`
  z-index: 1;
  position: absolute;
  left: 0;
  height: 100%;
  width: 100%;

  background-color: rgba(0, 0, 0, 0.4);

  animation-name: backdrop;
  animation-duration: 300ms;
  animation-timing-function: linear;
  animation-fill-mode: forwards;

  @keyframes backdrop {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
