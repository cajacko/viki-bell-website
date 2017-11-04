import { connect } from 'react-redux';
import FullWidthMultiImageBanner from 'components/FullWidthMultiImageBanner/FullWidthMultiImageBanner.component';
import Item from 'components/Item/Item';

const mapStateToProps = ({ banner }) => ({
  itemId: banner,
  element: FullWidthMultiImageBanner,
});

export default connect(mapStateToProps)(Item);
