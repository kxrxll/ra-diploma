import {
  TOP_SALES_REQUEST,
  TOP_SALES_FAILURE,
  TOP_SALES_SUCCESS,
  CATEGORIES_REQUEST,
  CATEGORIES_FAILURE,
  CATEGORIES_SUCCESS,
  CATALOG_REQUEST,
  CATALOG_FAILURE,
  CATALOG_SUCCESS,
  CATALOG_FILTER,
  CATALOG_MORE,
  CART_ADD,
  CART_REMOVE,
  CART_GET,
  ITEM_REQUEST,
  ITEM_SUCCESS,
  ITEM_FAILURE
} from './actionTypes';

export const topSalesRequest = () => ({
  type: TOP_SALES_REQUEST, payload: {}
});
export const topSalesFailure = error => ({
  type: TOP_SALES_FAILURE, payload: {error},
});
export const topSalesSuccess = topItems => ({
  type: TOP_SALES_SUCCESS, payload: {topItems},
});

export const categoriesRequest = () => ({
  type: CATEGORIES_REQUEST, payload: {}
});
export const categoriesFailure = error => ({
  type: CATEGORIES_FAILURE, payload: {error},
});
export const categoriesSuccess = items => ({
  type: CATEGORIES_SUCCESS, payload: {items},
});

export const catalogRequest = () => ({
  type: CATALOG_REQUEST, payload: {}
});
export const catalogFailure = error => ({
  type: CATALOG_FAILURE, payload: {error},
});
export const catalogSuccess = items => ({
  type: CATALOG_SUCCESS, payload: {items},
});
export const catalogFilter = id => ({
  type: CATALOG_FILTER, payload: {id},
});
export const catalogMore = (id, offset) => ({
  type: CATALOG_MORE, payload: {id, offset},
});

export const cartAdd = item => ({
  type: CART_ADD, payload: {item},
});
export const cartRemove = item => ({
  type: CART_REMOVE, payload: {item},
});
export const cartGet = () => ({
  type: CART_GET, payload: {},
});

export const itemRequest = (id) => ({
  type: ITEM_REQUEST, payload: {id}
});
export const itemFailure = error => ({
  type: ITEM_FAILURE, payload: {error},
});
export const itemSuccess = item => ({
  type: ITEM_SUCCESS, payload: {item},
});
