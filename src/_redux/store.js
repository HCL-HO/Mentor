import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import empty from "_redux/reducer/emptyReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({ empty });

export default createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
