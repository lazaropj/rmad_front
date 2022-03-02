import moment from 'moment';
import 'moment/locale/pt-br';

type dateFormat = {
  (date: string | null, format?: string): string;
}

export const dateFormat = (date: string | null): string=> {
  const dateHour = (dateFormat: string) => {
    const dateNow = moment().format('YYYY-MM-DD');
    const date = moment(dateFormat).format('YYYY-MM-DD');

    if (date == dateNow) {
      return moment(dateFormat).locale('pt-br').format('HH:mm');
    } else {
      return moment(dateFormat).format('DD.MM.YYYY HH:mm');
    }
  };

  if(date){
    return dateHour(date);
  }
  return 'data indefinida';
};