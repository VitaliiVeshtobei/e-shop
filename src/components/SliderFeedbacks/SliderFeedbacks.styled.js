import styled from 'styled-components';

export const Wrapper = styled.section`
  margin-top: 75px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: -10px;
`;

export const SlideBtnContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonSlide = styled.button`
  cursor: pointer;
  width: 16px;
  height: 16px;
  border: 1px solid #adadad;
  border-radius: 50%;
  margin-top: 48px;
  transition: transform 300ms ease, box-shadow 300ms ease, background-color 300ms ease, border 300ms ease;

  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.orange};
    transform: scale(1.05);
    -webkit-box-shadow: 0px 3px 6px -1px #000000;
    box-shadow: 0px 3px 6px -1px #000000;
    border: transparent;
    outline: transparent;
  }

  :not(:last-child) {
    margin-right: 10px;
  }
`;
