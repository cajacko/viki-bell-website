import posts from 'reducers/posts';

it('has correct properties', () => {
  const postsObject = posts();

  const result = [
    {
      id: 1,
      title: 'Post Title 1',
      excerpt: 'Post excerpt of some kind',
    },
    {
      id: 2,
      title: 'Post Title 2',
      excerpt: 'I am an excerpt',
    },
  ];

  expect(postsObject).toEqual(result);
});
