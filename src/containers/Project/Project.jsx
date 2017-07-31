import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Item from 'containers/Item/Item';
import Project from 'components/Project/Project';

const ProjectContainer = ({ templateDataItem, loading }) => (
  <Item element={Project} itemId={templateDataItem} loading={loading} />
);

ProjectContainer.propTypes = {
  templateDataItem: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps({ loading }) {
  return { loading };
}

export default connect(mapStateToProps)(ProjectContainer);
