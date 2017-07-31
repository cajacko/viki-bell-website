import moment from 'moment';

export default function (dateString) {
  return moment(dateString).format('ddd Do MMMM YYYY');
}
