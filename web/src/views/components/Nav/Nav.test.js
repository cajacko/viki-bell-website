import React from 'react';
import Nav from 'components/Nav/Nav';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Nav />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
