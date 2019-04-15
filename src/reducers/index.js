import {combineReducers} from 'redux';
import ErrorReducer from "./ErrorReducer";
import authReducer from "./authReducer";

export default combineReducers({
    errors: ErrorReducer,
    auth: authReducer,

});