import moment from 'moment';
import 'moment/locale/pt-br';

type dateFormat = {
  (date: string | null, format?: string): string;
}

export const dateFormat = (date: string | null): string=> {
  const dateHour = (dateFormat: string) => {
    const dateNow = moment().format('YYYY-MM-DD HH:mm:ss');
    const dateFuture = moment(dateFormat).format('YYYY-MM-DD HH:mm:ss');
    const dateNowMoment = moment(dateNow);
    const dateFutureMoment = moment(dateFuture);
    const diff = dateNowMoment.diff(dateFutureMoment);
  
    if (diff < 0) {
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