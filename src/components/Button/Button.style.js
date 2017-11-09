import styled from 'styled-components';
import { JELLY_BEAN_DARK, JELLY_BEAN, WHITE } from 'constants/colours';
import { FONT_SIZES } from 'constants/fonts';

export default {
  default: Element => styled(Element)`
    color: ${WHITE};
    cursor: pointer;
    background-color: ${JELLY_BEAN};
    appearance: none;
    border: 0;
    flex: 1;
    padding: 10px 20px;
    text-transform: uppercase;
    font-size: ${FONT_SIZES.MEDIUM}px;

    :hover {
      text-decoration: underline;
      color: ${WHITE};
      background-color: ${JELLY_BEAN_DARK};
    }
  `,
};
