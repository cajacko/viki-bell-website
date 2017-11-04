import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  position: relative;
  overflow: hidden;
`;

export const ImageDiv = styled.div`
  position: absolute;
  height: 100%;
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  width: ${({ width }) => width};
`;
