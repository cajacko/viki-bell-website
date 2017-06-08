import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'components/IconButton/IconButton';
import style from 'components/IconList/IconList.style';

const IconList = ({ size, listItemStyle }) => {
  const listItemStyleObject = {
    ...listItemStyle,
    ...style.listItem,
  };

  return (
    <ul style={style.list}>
      <li style={listItemStyleObject}><IconButton href="" colour="white" hoverColour="grey" title="Twitter" size={size} icon="twitter" /></li>
      <li style={listItemStyleObject}><IconButton href="" colour="white" hoverColour="grey" title="Instagram" size={size} icon="instagram" /></li>
      <li style={listItemStyleObject}><IconButton href="" colour="white" hoverColour="grey" title="Facebook" size={size} icon="facebook" /></li>
    </ul>
  );
};

IconList.propTypes = {
  size: PropTypes.oneOf([20]).isRequired,
  // eslint-disable-next-line
  listItemStyle: PropTypes.object,
};

IconList.defaultProps = {
  listItemStyle: {},
};

export default IconList;
