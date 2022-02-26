import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, switchMap, catchError } from 'rxjs/operators';
import { TOP_SALES_REQUEST, CATALOG_REQUEST, CATEGORIES_REQUEST, CATALOG_FILTER, CATALOG_MORE, CART_ADD, CART_GET, CART_REMOVE, ITEM_REQUEST } from '../actions/actionTypes'
import {
  topSalesFailure,
  topSalesSuccess,
  catalogFailure,
  catalogSuccess,
  categoriesFailure,
  categoriesSuccess,
  cartGet,
  cartAdd,
  cartRemove,
  itemFailure,
  itemSuccess
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

export const filterEpic = action$ => action$.pipe(
  ofType(CATALOG_FILTER),
  map(o => o.payload.id),
  map(o => new URLSearchParams(o ? {'categoryId': o} : false)),
  switchMap((o) => ajax.getJSON(`http://localhost:7070/api/items?${o}`).pipe(
    map(o => {
      if (o) {
        return catalogSuccess(o);
      }
    }),
    catchError(e => of(catalogFailure(e))),
  )),
);

export const moreEpic = action$ => action$.pipe(
  ofType(CATALOG_MORE),
  map(o => {
    return new URLSearchParams(
      o.payload.id ? 
      { 'categoryId': o.payload.id, 'offset': o.payload.offset }
      : 
      { 'offset': o.payload.offset }
      )
    }
  ),
  switchMap((o) => ajax.getJSON(`http://localhost:7070/api/items?${o}`).pipe(
    map(o => {
      if (o) {
        return catalogSuccess(o);
      }
    }),
    catchError(e => of(catalogFailure(e))),
  )),
);

export const categoriesEpic = action$ => action$.pipe(
  ofType(CATEGORIES_REQUEST),
  switchMap(() => ajax.getJSON('http://localhost:7070/api/categories').pipe(
    map(o => {
      if (o) {
        return categoriesSuccess(o);
      }
    }),
    catchError(e => of(categoriesFailure(e))),
  )),
);

export const itemEpic = action$ => action$.pipe(
  ofType(ITEM_REQUEST),
  map(o => o.payload.id),
  switchMap((o) => ajax.getJSON(`http://localhost:7070/api/items/${o}`).pipe(
    map(o => {
      if (o) {
        return itemSuccess(o);
      }
    }),
    catchError(e => of(itemFailure(e))),
  )),
);

export const cartGetEpic = action$ => action$.pipe(
  ofType(CART_GET),
  map(() => localStorage.getItem('cart').pipe(
    map(o => cartGet(JSON.parse(o))),
  ))
);

export const cartAddEpic = action$ => action$.pipe(
  ofType(CART_ADD),
  map((o) => localStorage.setItem('cart', JSON.stringify(cartAdd(o))))
);

export const cartRemoveEpic = action$ => action$.pipe(
  ofType(CART_REMOVE),
  map((o) => localStorage.setItem('cart', JSON.stringify(cartRemove(o))))
);

