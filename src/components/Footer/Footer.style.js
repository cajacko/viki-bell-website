import styled from 'styled-components';
import { GREY, WHITE } from 'constants/colours';
import { FONT_SIZES } from 'constants/fonts';

export const Section = styled.section`
  flex: 1;
  flex-direction: row;
  display: flex;
  background: ${WHITE};
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-size: ${FONT_SIZES.SMALL}px;
  color: ${GREY};
  text-align: center;
`;
