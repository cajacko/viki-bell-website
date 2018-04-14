/* @flow */

import { connect } from 'react-redux';
import SideBar from './SideBar.render';

const mapStateToProps = ({ profileImage, items }) => {
  const item = items[profileImage];

  if (!item) return {};

  const { title, file } = item;

  return {
    profileImage: file,
    profileImageAlt: title,
  };
};

export default connect(mapStateToProps)(SideBar);
