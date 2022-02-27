import { CART_ADD, CART_REMOVE, CART_GET } from '../actions/actionTypes';

const initialState = { items: [] };

export default function catalogReducer(state = initialState, action) {
  switch (action.type) {
    case CART_ADD:
      const toAdd = action.payload;
      const newItems = [...state.items, toAdd];
      return { ...state, items: newItems };
    case CART_REMOVE:
      return { ...state, items: state.items.filter(item => item !== action.payload) };
    case CART_GET:
      return { ...state };
    default:
      return state;
    }
}