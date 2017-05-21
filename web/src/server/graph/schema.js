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

import Post from 'models/post';
import getPosts from 'models/getPosts';
import getPost from 'models/getPost';

class Image {}

function getImage() {
  return new Image();
}

const { nodeInterface, nodeField } = nodeDefinitions(
  (globalId) => {
    const { type, id } = fromGlobalId(globalId);

    if (type === 'Post') {
      return getPost(id);
    } else if (type === 'Image') {
      return getImage(id);
    }

    return null;
  },
  (obj) => {
    if (obj instanceof Post) {
      // eslint-disable-next-line
      return GraphQLPost;
    } else if (obj instanceof Image) {
      // eslint-disable-next-line
      return GraphQLImage;
    }

    return null;
  },
);

const GraphQLImage = new GraphQLObjectType({
  name: 'Image',
  description: 'An image',
  fields: () => ({
    id: globalIdField('Image'),
    imageId: {
      type: GraphQLString,
      description: 'The image ID',
      resolve: obj => obj.postId,
    },
    src: {
      type: GraphQLString,
      description: 'The image src',
      resolve: obj => obj.src,
    },
    alt: {
      type: GraphQLString,
      description: 'The image alt text',
      resolve: obj => obj.alt,
    },
    originalHeight: {
      type: GraphQLInt,
      description: 'The images original height',
      resolve: obj => obj.originalHeight,
    },
    originalWidth: {
      type: GraphQLInt,
      description: 'The images original width',
      resolve: obj => obj.originalWidth,
    },
  }),
  interfaces: [nodeInterface],
});

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
      type: GraphQLImage,
      description: 'The posts featured image',
      resolve: obj => obj.image,
    },
    category: {
      type: GraphQLString,
      description: 'The main post category',
      resolve: obj => obj.category,
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
