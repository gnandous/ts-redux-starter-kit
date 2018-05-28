import { Observable } from 'rxjs/Observable';
import { Action, OTHERACTIONS } from '../actions';

export const baseEpic = (action$: Observable<Action>): Observable<Action> =>
  action$.filter(action => action.type === 'INCREMENT_ENTHUSIASM')
    .delay(1000)
    .mapTo({ type: OTHERACTIONS.PING });
