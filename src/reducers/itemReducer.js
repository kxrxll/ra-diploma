import { ITEM_REQUEST, ITEM_FAILURE, ITEM_SUCCESS } from '../actions/actionTypes';

const initialState = { item: {}, loading: false, error: null };

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case ITEM_REQUEST:
      return { ...state, item: {}, loading: true, error: null, };
    case ITEM_FAILURE:
      const {error} = action.payload;
      return { ...state, item: {}, loading: false, error, };
    case ITEM_SUCCESS:
      const {item} = action.payload;
      return { ...state, item, loading: false, error: null, };
    default:
      return state;
    }
}