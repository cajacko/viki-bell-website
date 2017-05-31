import PropTypes from 'prop-types';

export default {
  image: PropTypes.shape({
    originalHeight: PropTypes.number,
    originalWidth: PropTypes.number,
    src: PropTypes.string,
    alt: PropTypes.string,
  }).isRequired,
};
