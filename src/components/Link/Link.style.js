import styled from 'styled-components';
import { JELLY_BEAN_DARK, JELLY_BEAN } from 'constants/colours';

export default {
  default: Element => styled(Element)`
    color: ${JELLY_BEAN};
    cursor: pointer;

    :hover {
      text-decoration: underline;
      color: ${JELLY_BEAN_DARK};
    }
  `,
};
