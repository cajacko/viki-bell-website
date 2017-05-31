import {
  graphql,
  createFragmentContainer,
} from 'react-relay';
import Image from 'components/Image/Image.view';

export default createFragmentContainer(Image, {
  image: graphql`
    fragment Image_image on Image {
      src
      alt
      originalHeight
      originalWidth
    }
  `,
});
