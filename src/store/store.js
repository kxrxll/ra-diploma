import { createStore, combineReducers, applyMiddleware, compose, } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import topSalesRuducer from '../reducers/topSalesReducer';
import catalogReducer from '../reducers/catalogReducer';
import categoriesReducer from '../reducers/categoriesReducer';
import itemReducer from '../reducers/itemReducer';
import { topSalesEpic, catalogEpic, categoriesEpic, filterEpic, moreEpic, itemEpic } from '../epics';

const reducer = combineReducers({ topSales: topSalesRuducer, catalogItems: catalogReducer, categories: categoriesReducer, item: itemReducer});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epic = combineEpics(
  topSalesEpic,
  catalogEpic,
  categoriesEpic,
  filterEpic,
  moreEpic,
  itemEpic
);
const epicMiddleware = createEpicMiddleware();

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(epicMiddleware)
));
epicMiddleware.run(epic);
export default store;