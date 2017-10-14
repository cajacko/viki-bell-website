import { connect } from 'react-redux';
import Banner from 'components/Banner/Banner.component';

const mapStateToProps = ({ banner }) => ({ itemId: banner });

export default connect(mapStateToProps)(Banner);
