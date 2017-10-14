import React from 'react';
import Component from 'components/Component/Component';

const MainWrap = ({ components }) => {
  let id = 0;

  return (
    <main className="Main">
      {components &&
        components.map((props) => {
          id += 1;

          return <Component key={id} component={props.component} {...props} />;
        })
      }
    </main>
  );
};

export default MainWrap;
