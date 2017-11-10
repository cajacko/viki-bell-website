import styled from 'styled-components';
import { GREY_LIGHTER } from 'constants/colours';

export const Section = styled.section`
  flex: 1;
  background-color: ${GREY_LIGHTER};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoadingInit = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 50px 20px;
  text-transform: uppercase;
  font-size: 50px;
  opacity: 0.2;
  box-sizing: border-box;

  @media (max-width: 550px) {
    font-size: 40px;
  }

  @media (max-width: 450px) {
    font-size: 30px;
  }

  @media (max-width: 350px) {
    font-size: 20px;
  }
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
