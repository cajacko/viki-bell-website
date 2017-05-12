// import React from 'react';
// import {
//   QueryRenderer,
//   graphql,
//   createPaginationContainer,
// } from 'react-relay';
// import PropTypes from 'prop-types';
// import moment from 'moment';
// import environment from 'views/relayEnvironment';
// import PostLoop from 'components/PostLoop/PostLoop';
//
// const query = graphql`
//   query PostLoopQuery {
//     posts(first: 20) {
//       edges {
//         cursor
//         node {
//           id
//           postId
//           title
//           date
//           image
//           category
//           imageAlt
//           postSlug
//           categorySlug
//         }
//       }
//       pageInfo {
//         hasNextPage
//       }
//     }
//   }
// `;
//
// class PostsContainer extends React.Component {
//   constructor(props) {
//     console.log(3);
//     super(props);
//     this.getMorePosts = this.getMorePosts.bind(this);
//   }
//
//   getMorePosts(event) {
//     // eslint-disable-next-line
//     console.log('getMorePosts', event);
//
//     if (!this.props.relay.hasMore() || this.props.relay.isLoading()) {
//       return;
//     }
//
//     this.props.relay.loadMore(
//       10, // Fetch the next 10 feed items
//       (e) => {
//         // eslint-disable-next-line
//         console.log(e);
//       },
//     );
//   }
//
//   render() {
//     console.warn(this.props);
//     console.warn(this.props.posts);
//
//     return false;
//
//     // const posts = [];
//     //
//     // this.props.posts.edges.map((post) => {
//     //   const finalPostObject = Object.assign({}, post.node);
//     //
//     //   finalPostObject.date = moment.unix(finalPostObject.date);
//     //
//     //   return posts.push(finalPostObject);
//     // });
//     //
//     // return (
//     //   <PostLoop
//     //     posts={posts}
//     //     inverseColours={this.props.inverseColours}
//     //     recommendedPosts={this.props.recommendedPosts}
//     //     getMorePosts={this.getMorePosts}
//     //   />
//     // );
//   }
// }
//
// PostsContainer.propTypes = {
//   inverseColours: PropTypes.bool,
//   recommendedPosts: PropTypes.bool,
//   // eslint-disable-next-line
//   relay: PropTypes.object,
//   // eslint-disable-next-line
//   posts: PropTypes.object,
// };
//
// PostsContainer.defaultProps = {
//   inverseColours: false,
//   recommendedPosts: false,
// };
//
// export default createPaginationContainer(
//   PostsContainer,
//   graphql`
//     fragment PostLoop_posts on Post @relay(plural: true) {
//       posts(
//         first: $count,
//         after: $cursor
//       ) @connection(key: "PostLoop_posts") {
//         edges {
//           node {
//             id
//             postId
//             title
//             excerpt
//             date
//             image
//             category
//           }
//         }
//       }
//     }
//   `,
//   {
//     getFragmentVariables(prevVars, totalCount) {
//       console.log(1);
//       return {
//         ...prevVars,
//         count: totalCount,
//       };
//     },
//     getVariables(props, { count, cursor }, fragmentVariables) {
//       console.log(2);
//       return {
//         count,
//         cursor,
//         // in most cases, for variables other than connection filters like
//         // `first`, `after`, etc. you may want to use the previous values.
//         // orderBy: fragmentVariables.orderBy,
//       };
//     },
//     query: graphql`
//       query PostLoopPaginationQuery(
//         $count: Int!
//         $cursor: String
//       ) {
//         posts {
//           ...PostLoop_posts
//         }
//       }
//     `,
//   },
// );
