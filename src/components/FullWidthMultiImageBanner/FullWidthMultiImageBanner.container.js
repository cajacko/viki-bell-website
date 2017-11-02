import { connect } from 'react-redux';
import FullWidthMultiImageBanner from 'components/FullWidthMultiImageBanner/FullWidthMultiImageBanner.render';

const mapStateToProps = () => ({
  title: 'Viki Bell',
  tagline: 'London Lifestyle Blogger',
  leftImage: {
    url: 'https://picsum.photos/200/300',
    details: { image: { height: 100, width: 100 } },
  },
  rightImage: {
    url: 'https://picsum.photos/200/300',
    details: { image: { height: 100, width: 100 } },
  },
});

export default connect(mapStateToProps)(FullWidthMultiImageBanner);
