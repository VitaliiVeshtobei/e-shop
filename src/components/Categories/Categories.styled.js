import styled from 'styled-components';

export const Wrapper = styled.section`
  margin-top: 75px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: -15px;
`;

export const Text = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 41px;
  text-align: center;
  color: ${(p) => p.theme.colors.darkText};
  margin-bottom: 50px;
`;
