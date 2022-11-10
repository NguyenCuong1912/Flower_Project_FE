import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk';
import { ManageUserReducer } from './Reducers/ManageUserReducer';
import { ManageGroupReducer } from './Reducers/ManageGroupReducer';


const rootReducers = combineReducers({
    ManageUserReducer,
    ManageGroupReducer,
});

export const store = createStore(rootReducers, applyMiddleware(thunk))