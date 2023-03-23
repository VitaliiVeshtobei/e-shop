import styled from 'styled-components';

export const Container = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  height: 70px;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #292d32;
`;

export const LocationContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  .icon {
    size: 12px;
  }
  p {
    margin-left: 10px;
  }
`;
