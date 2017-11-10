import styled from 'styled-components';
import { GREY_LIGHTER } from 'constants/colours';

export const Section = styled.section`
  flex: 1;
  background-color: ${GREY_LIGHTER};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Error = styled.span`
  margin-bottom: 10px;
  text-align: center;
`;

export const PostLoopContainer = styled.div`
  flex: 1;
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  margin-top: ${({ marginTop }) => marginTop}px;
  overflow: hidden;
  justify-content: center;
`;

export const Footer = styled.div`
  padding: ${({ verticalSpacing }) => verticalSpacing}px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonContainer = styled.div`max-width: 200px;`;
