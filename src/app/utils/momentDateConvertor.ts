import * as moment from 'moment';

export const momentDateConvertor = (date: any) => {
  const convertedDate = moment(date).toDate();
  return convertedDate;
};
