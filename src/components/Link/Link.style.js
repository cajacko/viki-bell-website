import styled from 'styled-components';
import {
  JELLY_BEAN_DARK,
  JELLY_BEAN,
  GREY,
  GREY_DARK,
} from 'constants/colours';

export default {
  default: Element => styled(Element)`
    color: ${JELLY_BEAN};
    cursor: pointer;

    :hover {
      text-decoration: underline;
      color: ${JELLY_BEAN_DARK};
    }
  `,

  grey: Element => styled(Element)`
    color: ${GREY};
    cursor: pointer;

    :hover {
      text-decoration: underline;
      color: ${GREY_DARK};
    }
  `,
};
