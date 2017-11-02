import styled from 'styled-components';
import { WHITE, GREY } from 'constants/colours';

export const Section = styled.section`
  flex: 1;
  flex-direction: row;
  display: flex;
  background: ${WHITE};
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
