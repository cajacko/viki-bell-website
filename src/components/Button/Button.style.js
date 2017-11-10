import styled from 'styled-components';
import { JELLY_BEAN_DARK, JELLY_BEAN, WHITE } from 'constants/colours';
import { FONT_SIZES } from 'constants/fonts';

const hover = `
:hover {
  text-decoration: underline;
  color: ${WHITE};
  background-color: ${JELLY_BEAN_DARK};
}
`;

export default {
  default: Element => styled(Element)`
    color: ${WHITE};
    cursor: ${({ disabled }) =>
      disabled ? 'not-allowed' : 'pointer'} !important;
    background-color: ${JELLY_BEAN};
    appearance: none;
    border: 0;
    flex: 1;
    padding: 10px 20px;
    text-transform: uppercase;
    font-size: ${FONT_SIZES.MEDIUM}px;

    ${({ disabled }) => disabled || hover};
  `,
};
