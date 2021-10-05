import { LOGIN, REGISTER, LOGOUT } from "../types";

const initialState = {
    authData: null,
    isAuthenticated: false,
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN:
            localStorage.setItem('profile', JSON.stringify({ ...action?.payload }));
            return {
                ...state,
                authData: action?.payload,
                isAuthenticated: action?.payload?.isAuthenticated,
            }
        case REGISTER:
            return state
        case LOGOUT:
            localStorage.removeItem('profile');
            return {
                ...state,
                authData: null,
                isAuthenticated: false,
            }
        default:
            return state
    }
}

export default authReducer;
