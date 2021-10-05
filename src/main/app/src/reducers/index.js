import { combineReducers } from "redux";
import auth from './auth';
import property from './property'

export default combineReducers({
    auth,
    property,
})
