import styled from 'styled-components';
import { GREY_LIGHT, GREY_DARK, GREY } from 'constants/colours';
import PAGE_WIDTH from 'constants/pageWidth';
import { FONT_SIZES } from 'constants/fonts';

export const Section = styled.section`
  flex: 1;
  background-color: ${GREY_LIGHT};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 10px;
`;

export const Heading = styled.h1`
  font-size: 40px;
  max-width: ${PAGE_WIDTH}px;
  width: 100%;
  text-transform: uppercase;
  color: ${GREY_DARK};
`;

export const Time = styled.time`
  width: 100%;
  color: ${GREY};
  font-size: ${FONT_SIZES.MEDIUM}px;
  margin-top: 10px;
  max-width: ${PAGE_WIDTH}px;
`;
