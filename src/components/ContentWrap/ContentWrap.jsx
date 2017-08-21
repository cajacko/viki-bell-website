import React from 'react';
import Component from 'components/Component/Component';

const ContentWrap = ({ components }) => {
  let id = 0;

  return (
    <div className="Content u-wrap">
      <div className="Content--wrap">
        {
          components.map((componentProps) => {
            id += 1;

            return <Component key={id} {...componentProps} />;
          })
        }
      </div>
    </div>
  );
};

export default ContentWrap;
