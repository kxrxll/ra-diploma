import { CATALOG_REQUEST, CATALOG_FAILURE, CATALOG_SUCCESS } from '../actions/actionTypes';

const initialState = { items: [], loading: false, error: null, noButton: false };

export default function catalogReducer(state = initialState, action) {
  switch (action.type) {
    case CATALOG_REQUEST:
      return { ...state, items: [], loading: true, error: null, noButton: false };
    case CATALOG_FAILURE:
      const {error} = action.payload;
      return { ...state, items: [], loading: false, error, noButton: false };
    case CATALOG_SUCCESS:
      const {items} = action.payload;
      return items[0] ? { ...state, items, loading: false, error: null, noButton: false } : { ...state, loading: false, error: null, noButton: true };
    default:
      return state;
    }
}