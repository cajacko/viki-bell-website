import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Post {
    id: ID!,
    title: String!,
    excerpt: String!
  }

  type Query {
    post(id: ID): Post
    posts: [Post]
  }
`);

export default schema;
