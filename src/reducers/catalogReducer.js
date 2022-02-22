import { CATALOG_REQUEST, CATALOG_FAILURE, CATALOG_SUCCESS } from '../actions/actionTypes';

const initialState = { items: [], loading: false, error: null };

export default function catalogReducer(state = initialState, action) {
  switch (action.type) {
    case CATALOG_REQUEST:
      return { ...state, items: [], loading: true, error: null, };
    case CATALOG_FAILURE:
      const {error} = action.payload;
      return { ...state, items: [], loading: false, error, };
    case CATALOG_SUCCESS:
      const {items} = action.payload;
      return { ...state, items, loading: false, error: null, };
    default:
      return state;
    }
}