import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, switchMap, catchError } from 'rxjs/operators';
import { TOP_SALES_REQUEST, CATALOG_REQUEST } from '../actions/actionTypes'
import {
  topSalesFailure,
  topSalesSuccess,
  catalogFailure,
  catalogSuccess
} from '../actions/index';

export const topSalesEpic = action$ => action$.pipe(
  ofType(TOP_SALES_REQUEST),
  switchMap(() => ajax.getJSON('http://localhost:7070/api/top-sales').pipe(
    map(o => {
      if (o) {
        return topSalesSuccess(o);
      }
    }),
    catchError(e => of(topSalesFailure(e))),
  )),
);

export const catalogEpic = action$ => action$.pipe(
  ofType(CATALOG_REQUEST),
  switchMap(() => ajax.getJSON('http://localhost:7070/api/items').pipe(
    map(o => {
      if (o) {
        return catalogSuccess(o);
      }
    }),
    catchError(e => of(catalogFailure(e))),
  )),
);

