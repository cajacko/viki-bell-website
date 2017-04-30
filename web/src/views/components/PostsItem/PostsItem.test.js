import React from 'react';
import PostsItem from 'components/PostsItem/PostsItem';
import renderer from 'react-test-renderer';
import moment from 'moment';

it('renders correctly', () => {
  const tree = renderer.create(
    <PostsItem
      title="Viki Bell Post Title"
      date={moment()}
      image="https://unsplash.it/400/300"
      category="Life"
      imageAlt="Dummy Image"
      slug="viki-bell-post-title"
    />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders correctly again', () => {
  const tree = renderer.create(
    <PostsItem
      title="Viki Bell Post Title 2"
      date={moment()}
      image="https://unsplash.it/200/300"
      category="Food"
      imageAlt="Ooo yeah"
      slug="viki-bell-post-title-2"
    />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
