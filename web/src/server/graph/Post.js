/* @flow */

class Post {
  id: number;
  excerpt: string;

  constructor(id: number) {
    this.id = id;
    this.excerpt = 'I am a post excerpt';
  }

  title() {
    return `Post title: ${this.id}`;
  }
}

export default Post;
