import { connect } from 'react-redux';
import BannerType from 'components/BannerType/BannerType.component';

const mapStateToProps = ({ banner, items }) => ({ banner: items[banner] });

export default connect(mapStateToProps)(BannerType);
