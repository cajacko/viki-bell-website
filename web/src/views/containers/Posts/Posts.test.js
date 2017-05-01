import React from 'react';
import Posts from 'containers/Posts/Posts';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Posts />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
