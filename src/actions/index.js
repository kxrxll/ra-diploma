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
  MORE_REQUEST,
  MORE_FAILURE,
  MORE_SUCCESS
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

export const moreRequest = () => ({
  type: MORE_REQUEST, payload: {}
});
export const moreFailure = error => ({
  type: MORE_FAILURE, payload: {error},
});
export const moreSuccess = items => ({
  type: MORE_SUCCESS, payload: {items},
});
