import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk';
import { ManageUserReducer } from './Reducers/ManageUserReducer';


const rootReducers = combineReducers({
    ManageUserReducer
});

export const store = createStore(rootReducers, applyMiddleware(thunk))