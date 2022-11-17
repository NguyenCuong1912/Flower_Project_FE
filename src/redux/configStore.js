import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk';
import { ManageUserReducer } from './Reducers/ManageUserReducer';
import { ManageGroupReducer } from './Reducers/ManageGroupReducer';
import { ManageProductReducer } from './Reducers/ManageProductReducer';
import ManageCartReducer from "./Reducers/ManageCartReducer";


const rootReducers = combineReducers({
    ManageUserReducer,
    ManageGroupReducer,
    ManageProductReducer,
    ManageCartReducer
});

export const store = createStore(rootReducers, applyMiddleware(thunk))