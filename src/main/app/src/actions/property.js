import { ADD_PROPERTY, GET_PROPERTIES, DELETE_PROPERTY } from "../types";
import * as api from '../api'

export const addProperty = (formData) => async (dispatch) => {
    try {
        const { data } = await api.addProperty(formData);
        dispatch({
            type: ADD_PROPERTY,
            payload: data,
        })
    } catch (err) {
        console.log(err);
    }
}

export const getProperties = () => async (dispatch) => {
    try {
        const { data } = await api.getProperties();
        dispatch({
            type: GET_PROPERTIES,
            payload: data,
        })
    } catch (err) {
        console.log(err);
    }
}

export const deleteProperty = (id) => async (dispatch) => {
    try {
        const { data } = await api.deleteProperty(id);
        dispatch({
            type: DELETE_PROPERTY,
            payload: data,
        })
    } catch (err) {
        console.log(err);
    }
}
