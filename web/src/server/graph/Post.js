class Post {
  constructor(id) {
    this.id = id;
    this.excerpt = 'I am a post excerpt';
  }

  title() {
    return `Post title: ${this.id}`;
  }
}

export default Post;
