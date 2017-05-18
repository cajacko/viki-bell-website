import moment from 'moment';

export class Post {}

const posts = [
  'My guide to secret cinema',
  'Yeah yeah yeah',
  'How\'s-it',
  'Woo yeah',
  'Using habitica for your habits',
  'Yeah buddy',
  'My guide to secret cinema',
  'Yeah yeah yeah',
  'How\'s-it',
  'Woo yeah',
  'Using habitica for your habits',
  'Yeah buddy',
  'My guide to secret cinema',
  'Yeah yeah yeah',
  'How\'s-it',
  'Woo yeah',
  'Using habitica for your habits',
  'Yeah buddy',
  'My guide to secret cinema',
  'Yeah yeah yeah',
  'How\'s-it',
  'Woo yeah',
  'Using habitica for your habits',
  'Yeah buddy',
  'My guide to secret cinema',
  'Yeah yeah yeah',
  'How\'s-it',
  'Woo yeah',
  'Using habitica for your habits',
  'Yeah buddy',
  'My guide to secret cinema',
  'Yeah yeah yeah',
  'How\'s-it',
  'Woo yeah',
  'Using habitica for your habits',
  'Yeah buddy',
].map((title, i) => {
  const post = new Post();
  post.title = `${i} ${title}`;
  post.id = `${i}`;
  post.postId = `${i}`;
  post.excerpt = 'I am an excerpt';
  post.date = moment('2017-09-09 12:12:12').unix();
  post.image = 'https://unsplash.it/400/300';
  post.category = 'Life';
  post.imageAlt = 'Image alt tag';
  post.postSlug = title;
  post.categorySlug = 'life';
  return post;
});

export function getPost(id) {
  let selectedPost;

  posts.forEach((post) => {
    if (post.id === id) {
      selectedPost = post;
    }
  });

  return selectedPost;
}

export function getPosts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(posts), 0);
  });
}
