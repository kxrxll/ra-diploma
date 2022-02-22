import { createStore, combineReducers, applyMiddleware, compose, } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import topSalesRuducer from '../reducers/topSalesReducer';
import catalogReducer from '../reducers/catalogReducer';
import { topSalesEpic, catalogEpic } from '../epics';

const reducer = combineReducers({ topSales: topSalesRuducer, catalogItems: catalogReducer });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epic = combineEpics(
  topSalesEpic,
  catalogEpic,
);
const epicMiddleware = createEpicMiddleware();

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(epicMiddleware)
));
epicMiddleware.run(epic);
export default store;