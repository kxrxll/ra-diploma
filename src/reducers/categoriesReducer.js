import { CATEGORIES_REQUEST, CATEGORIES_FAILURE, CATEGORIES_SUCCESS } from '../actions/actionTypes';

const initialState = { items: [], loading: false, error: null };

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case CATEGORIES_REQUEST:
      return { ...state, items: [], loading: true, error: null, };
    case CATEGORIES_FAILURE:
      const {error} = action.payload;
      return { ...state, items: [], loading: false, error, };
    case CATEGORIES_SUCCESS:
      const {items} = action.payload;
      return { ...state, items, loading: false, error: null, };
    default:
      return state;
    }
}