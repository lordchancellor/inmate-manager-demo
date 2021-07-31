import { map } from 'rxjs/operators'
import moment from 'moment';
import { Inmate } from '../_models';

export const mapInmates = map((data: any[]): Inmate[] => {
  return data.map((inmate: any): Inmate => {
    return {
      id: inmate.id,
      referenceNumber: inmate.reference,
      name: `${inmate.firstName} ${inmate.surname}`,
      arrivalDate: moment(inmate.arrivalDateTime).format('YYYY-MM-DD')
    }
  })
});