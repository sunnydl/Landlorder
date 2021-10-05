import { LOGIN } from '../types'
import * as api from '../api'
import decode from 'jwt-decode'

export const login = (formData, history, message) => async (dispatch) => {
    try {
        const { data } = await api.login(formData);
        const decodedToken = decode(data.access_token);
        console.log(decodedToken);
        dispatch({
            type: LOGIN,
            payload: { ...data, ...decodedToken, isAuthenticated: true },
        });
        history.push('/dashboard');
        message.success("Login Successful");
    } catch (err) {
        console.log(err);
    }
}

export const register = async (formData, message) => {
    try {
        const { data } = await api.register({
            username: formData.username,
            password: formData.password,
            name: formData.fullName,
        });
        console.log(data);
        message.success("Register Successful");
    } catch (err) {
        console.log(err);
        message.danger("Username already exits");
    }
}
