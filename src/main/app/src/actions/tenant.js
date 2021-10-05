import { ADD_TENANT } from "../types";
import * as api from '../api'

export const addTenant = (formData) => async (dispatch) => {
    try {
        const { data } = await api.addTenant(formData);
        console.log(data);
        dispatch({
            type: ADD_TENANT,
            payload: data,
        })
    } catch (err) {

    }
}
