import { TOP_SALES_REQUEST, TOP_SALES_FAILURE, TOP_SALES_SUCCESS } from '../actions/actionTypes';

const initialState = { topItems: [], loading: false, error: null };

export default function topSalesRuducer(state = initialState, action) {
  switch (action.type) {
    case TOP_SALES_REQUEST:
      return { ...state, topItems: [], loading: true, error: null, };
    case TOP_SALES_FAILURE:
      const {error} = action.payload;
      return { ...state, topItems: [], loading: false, error, };
    case TOP_SALES_SUCCESS:
      const {topItems} = action.payload;
      return { ...state, topItems, loading: false, error: null, };
    default:
      return state;
    }
}