import styled from 'styled-components';
import { WHITE, GREY } from 'constants/colours';

const before = ({ leftImage }) =>
  leftImage
    ? null
    : `
  :before {
    content: '';
    display: flex;
    flex: 1;
  }
`;

const after = ({ rightImage }) =>
  rightImage
    ? null
    : `
  :after {
    content: '';
    display: flex;
    flex: 1;
  }
`;

export const Section = styled.section`
  flex: 1;
  flex-direction: row;
  display: flex;
  background: ${WHITE};
  ${before};
  ${after};
`;

export const IconContainer = styled.div`width: 300px;`;

export const TagLine = styled.h2`
  padding-top: 30px;
  text-align: center;
  font-size: 18px;
  color: ${GREY};
`;

export const SiteHeader = styled.h1`display: none;`;

export const Center = styled.div`padding: 50px;`;
