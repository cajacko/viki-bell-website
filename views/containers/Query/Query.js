import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const QueryContainer = (props) => {
  const Component = props.element;
  const componentProps = Object.assign({}, props);

  delete componentProps.element;
  delete componentProps.query;

  if (props.itemsAs !== 'items') {
    componentProps[props.itemsAs] = componentProps.items;
    delete componentProps.items;
  }

  return <Component {...componentProps} />;
};

QueryContainer.propTypes = {
  element: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
  ]).isRequired,
  // eslint-disable-next-line
  items: PropTypes.arrayOf(PropTypes.number).isRequired,
  // eslint-disable-next-line
  hasMore: PropTypes.bool.isRequired,
  // eslint-disable-next-line
  loading: PropTypes.bool.isRequired,
  // eslint-disable-next-line
  query: PropTypes.string.isRequired,
  // eslint-disable-next-line
  error: PropTypes.oneOfType([
    PropTypes.shape({
      timestamp: PropTypes.number,
      displayMessage: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      code: PropTypes.number,
    }),
    PropTypes.oneOf([false]),
  ]),
  itemsAs: PropTypes.string,
};

QueryContainer.defaultProps = {
  itemsAs: 'items',
  error: false,
};

function mapStateToProps(state, props) {
  let items = [];
  let hasMore = false;
  let loading = false;
  let error = false;

  if (state.queries) {
    const query = state.queries[props.query];

    if (query) {
      if (query.items) {
        items = query.items;
      }

      if (query.hasMore) {
        hasMore = query.hasMore;
      }

      if (query.loading) {
        loading = query.loading;
      }

      if (query.error) {
        error = query.error;
      }
    }
  }

  return { items, hasMore, loading, error };
}

export default connect(mapStateToProps)(QueryContainer);
