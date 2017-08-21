import React from 'react';
import Component from 'components/Component/Component';

const MainWrap = ({ components }) => {
  let id = 0;

  return (
    <main className="Main">
      {components &&
        components.map(({ component }) => {
          id += 1;

          return <Component key={id} component={component} />;
        })
      }
    </main>
  );
};

export default MainWrap;
