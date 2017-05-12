import PropTypes from 'prop-types';

export default {
  post: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.number,
    image: PropTypes.string,
    category: PropTypes.string,
    imageAlt: PropTypes.string,
    postSlug: PropTypes.string,
    categorySlug: PropTypes.string,
    inverseColours: PropTypes.bool,
  }).isRequired,
};
