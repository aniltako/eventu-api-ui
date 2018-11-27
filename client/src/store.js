import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger as logger } from 'redux-logger';
import userReducer from './reducers/userReducer';
import userInfoReducer from './reducers/userInfoReducer';

import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

export default createStore(
    combineReducers({
    	userReducer, userInfoReducer
    }), 
    {}, 
    applyMiddleware(logger(), thunk, promise())
);