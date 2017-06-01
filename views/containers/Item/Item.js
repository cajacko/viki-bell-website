import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ItemContainer = (props) => {
  const Component = props.element;
  const componentProps = Object.assign({}, props);

  delete componentProps.element;
  delete componentProps.itemId;

  return <Component {...componentProps} />;
};

ItemContainer.propTypes = {
  element: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
  ]).isRequired,
  // eslint-disable-next-line
  type: PropTypes.oneOf(['post', 'category', 'template', 'tag']),
  // eslint-disable-next-line
  properties: PropTypes.object,
  // eslint-disable-next-line
  itemId: PropTypes.number.isRequired,
};

ItemContainer.defaultProps = {
  itemsAs: 'items',
  error: false,
};

function mapStateToProps(state, props) {
  let properties = {};

  if (state.items) {
    const item = state.items[props.itemId];

    if (item && item.properties) {
      properties = item.properties;
    }
  }

  return { ...properties };
}

export default connect(mapStateToProps)(ItemContainer);
