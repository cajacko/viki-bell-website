import React from 'react';

const Loading = ({ noMargin }) => (
  <div className="spinner" style={{ marginTop: noMargin ? 0 : null }}>
    <div className="bounce1" />
    <div className="bounce2" />
    <div className="bounce3" />
  </div>
);

export default Loading;
