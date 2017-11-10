import styled from 'styled-components';
import { WHITE, GREY_LIGHT, GREY } from 'constants/colours';
import { FONT_SIZES } from 'constants/fonts';

export const Article = styled.article`
  width: ${({ postWidth }) => Math.floor(postWidth * 100) / 100}%;
  padding-top: ${({ paddingTop }) => paddingTop}px;
  display: flex;
`;

export const ArticleContainer = styled.div`
  background-color: ${WHITE};
  flex: 1;
  border: 1px solid ${GREY_LIGHT};
  border-right: none;
  ${({ noLeftBorder }) => noLeftBorder && 'border-left: none;'};
  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  padding-bottom: 100%;
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 5px 15px 20px 15px;
  flex: 1;
  justify-content: space-between;
`;

export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  text-align: center;
  font-size: ${FONT_SIZES.LARGE}px;
`;

export const Time = styled.time`
  color: ${GREY};
  font-size: ${FONT_SIZES.SMALL}px;
  margin-bottom: 5px;
`;
