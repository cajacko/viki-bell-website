import React from 'react';
import moment from 'moment';
import Posts from 'components/Posts/Posts';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Posts
      posts={[
        {
          id: 234,
          title: 'Post title',
          date: moment('2016-09-09 12:12:12'),
          image: 'https://unsplash.it/400/300',
          category: 'Life',
          imageAlt: 'Image alt',
          slug: 'post-title',
        },
        {
          id: 345,
          title: 'Post title 2',
          date: moment('2016-09-04 12:12:12'),
          image: 'https://unsplash.it/400/300',
          category: 'Life',
          imageAlt: 'Image alt',
          slug: 'post-title',
        },
        {
          id: 3456,
          title: 'Post title 3',
          date: moment('2016-09-02 12:12:12'),
          image: 'https://unsplash.it/400/300',
          category: 'Life',
          imageAlt: 'Image alt',
          slug: 'post-title',
        },
      ]}
    />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
