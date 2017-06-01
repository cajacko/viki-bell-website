import PropTypes from 'prop-types';

export default {
  title: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  image: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,
  postSlug: PropTypes.string.isRequired,
  categorySlug: PropTypes.string.isRequired,
  inverseColours: PropTypes.bool.isRequired,
  theme: PropTypes.string,
};
