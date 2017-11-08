import styled from 'styled-components';
import { WHITE, GREY_LIGHT } from 'constants/colours';

export const Article = styled.article`
  width: ${({ postWidth }) => postWidth.toFixed(2)}%;
  padding-top: ${({ paddingTop }) => paddingTop}px;
  display: flex;
`;

export const ArticleContainer = styled.div`
  background-color: ${WHITE};
  flex: 1;
  border: 1px solid ${GREY_LIGHT};
  border-right: none;
  ${({ noLeftBorder }) => noLeftBorder && 'border-left: none;'};
`;

export const ImageContainer = styled.div`
  padding-bottom: 100%;
  position: relative;
`;
