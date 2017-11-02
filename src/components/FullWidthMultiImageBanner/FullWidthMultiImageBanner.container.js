import { connect } from 'react-redux';
import FullWidthMultiImageBanner from 'components/FullWidthMultiImageBanner/FullWidthMultiImageBanner.component';

const mapStateToProps = ({ banner }) => ({ itemId: banner });

export default connect(mapStateToProps)(FullWidthMultiImageBanner);
