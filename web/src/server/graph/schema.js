import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
} from 'graphql';

import {
  connectionArgs,
  connectionDefinitions,
  connectionFromPromisedArray,
  fromGlobalId,
  globalIdField,
  nodeDefinitions,
} from 'graphql-relay';

import {
  Post,
  getPost,
  getPosts,
} from 'models/post';

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
      return GraphQLPost;
    }

    return null;
  },
);

const GraphQLPost = new GraphQLObjectType({
  name: 'Post',
  description: 'A shiny post',
  fields: () => ({
    id: globalIdField('Post'),
    postId: {
      type: GraphQLString,
      description: 'The post ID',
      resolve: obj => obj.postId,
    },
    title: {
      type: GraphQLString,
      description: 'The title of the post',
      resolve: obj => obj.title,
    },
    date: {
      type: GraphQLInt,
      description: 'The posts published date',
      resolve: obj => obj.date,
    },
    image: {
      type: GraphQLString,
      description: 'The posts featured image',
      resolve: obj => obj.image,
    },
    category: {
      type: GraphQLString,
      description: 'The main post category',
      resolve: obj => obj.category,
    },
    imageAlt: {
      type: GraphQLString,
      description: 'The posts featured image alt tag',
      resolve: obj => obj.imageAlt,
    },
    postSlug: {
      type: GraphQLString,
      description: 'The post slug',
      resolve: obj => obj.postSlug,
    },
    categorySlug: {
      type: GraphQLString,
      description: 'The category slug',
      resolve: obj => obj.categorySlug,
    },
  }),
  interfaces: [nodeInterface],
});

const {
  connectionType: PostsConnection,
} = connectionDefinitions({
  name: 'Post',
  nodeType: GraphQLPost,
});

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    node: nodeField,
    posts: {
      description: 'A person\'s collection of posts',
      type: PostsConnection,
      args: {
        queryType: {
          type: GraphQLString,
          defaultValue: 'any',
        },
        queryTerm: {
          type: GraphQLString,
          defaultValue: 'any',
        },
        ...connectionArgs,
      },
      resolve: (obj, { queryType, queryTerm, ...args }) =>
        connectionFromPromisedArray(getPosts(queryType, queryTerm, args), args),
    },
  }),
});

export default new GraphQLSchema({ query: Query });
