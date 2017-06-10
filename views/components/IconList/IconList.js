import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'components/IconButton/IconButton';
import style from 'components/IconList/IconList.style';

const IconList = ({ size, listItemStyle, theme }) => {
  const listItemStyleObject = {
    ...listItemStyle,
    ...style.listItem,
  };

  let colour;
  let hoverColour;

  switch (theme) {
    case 'white':
      colour = 'white';
      hoverColour = 'grey';
      break;

    case 'turqoise':
      colour = 'turqoise';
      hoverColour = 'turqoise-dark';
      break;

    default:
      colour = 'white';
      hoverColour = 'grey';
      break;
  }

  return (
    <ul style={style.list}>
      <li style={listItemStyleObject}><IconButton href="" colour={colour} hoverColour={hoverColour} title="Twitter" size={size} icon="twitter" /></li>
      <li style={listItemStyleObject}><IconButton href="" colour={colour} hoverColour={hoverColour} title="Instagram" size={size} icon="instagram" /></li>
      <li style={listItemStyleObject}><IconButton href="" colour={colour} hoverColour={hoverColour} title="Facebook" size={size} icon="facebook" /></li>
    </ul>
  );
};

IconList.propTypes = {
  size: PropTypes.oneOf([20]).isRequired,
  theme: PropTypes.oneOf(['white', 'turqoise']).isRequired,
  // eslint-disable-next-line
  listItemStyle: PropTypes.object,
};

IconList.defaultProps = {
  listItemStyle: {},
};

export default IconList;
