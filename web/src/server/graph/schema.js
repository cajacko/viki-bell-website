/* @flow */

import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
} from 'graphql';

import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  fromGlobalId,
  globalIdField,
  nodeDefinitions,
} from 'graphql-relay';

import {
  // Import methods that your schema can use to interact with your database
  Post,
  getPost,
  getPosts,
} from '../models/database';

/**
 * We get the node interface and field from the Relay library.
 *
 * The first method defines the way we resolve an ID to its object.
 * The second defines the way we resolve an object to its GraphQL type.
 */
const { nodeInterface, nodeField } = nodeDefinitions(
  (globalId) => {
    const { type, id } = fromGlobalId(globalId);

    if (type === 'Post') {
      return getPost(id);
    }

    return null;
  },
  (obj) => {
    if (obj instanceof Post) {
      // eslint-disable-next-line
      return postType;
    }

    return null;
  },
);

const postType = new GraphQLObjectType({
  name: 'Post',
  description: 'A shiny post',
  fields: () => ({
    id: globalIdField('Post'),
    postId: {
      type: GraphQLString,
      description: 'The post ID',
    },
    title: {
      type: GraphQLString,
      description: 'The title of the post',
    },
    excerpt: {
      type: GraphQLString,
      description: 'The post excerpt',
    },
    date: {
      type: GraphQLInt,
      description: 'The posts published date',
    },
    image: {
      type: GraphQLString,
      description: 'The posts featured image',
    },
    category: {
      type: GraphQLString,
      description: 'The main post category',
    },
    imageAlt: {
      type: GraphQLString,
      description: 'The posts featured image alt tag',
    },
    slug: {
      type: GraphQLString,
      description: 'The post slug',
    },
  }),
  interfaces: [nodeInterface],
});

/**
 * Define your own connection types here
 */
const { connectionType: postConnection } =
  connectionDefinitions({ name: 'Post', nodeType: postType });

/**
 * This is the type that will be the root of our query,
 * and the entry point into our schema.
 */
const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    node: nodeField,

    posts: {
      type: postConnection,
      description: 'A person\'s collection of posts',
      args: connectionArgs,
      resolve: (_, args) => connectionFromArray(getPosts(), args),
    },

    post: {
      type: postType,
      description: 'A specific post',
      args: {
        id: globalIdField('Post'),
      },
      resolve: (_, args) => getPost(args.id),
    },
  }),
});

export default new GraphQLSchema({ query: queryType });
