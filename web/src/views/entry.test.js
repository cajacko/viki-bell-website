import React from 'react';
import entry from 'views/entry';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <entry />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
