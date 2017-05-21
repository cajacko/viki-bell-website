import unserialize from 'locutus/php/var/unserialize';
import getPostMeta from 'models/getPostMeta';

export default function (attachmentId, callback) {
  let id;

  if (Array.isArray(attachmentId)) {
    id = attachmentId[0];
  } else {
    id = attachmentId;
  }

  getPostMeta(id, (error, result) => {
    if (error) {
      throw error;
    }

    if (result._wp_attached_file) {
      const thumbnail = unserialize(result._wp_attachment_metadata);
      thumbnail.alt = result._wp_attachment_image_alt;
      callback(null, thumbnail);
    } else {
      callback(null, false);
    }
  });
}
