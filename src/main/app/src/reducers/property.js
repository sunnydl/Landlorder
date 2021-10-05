import { ADD_PROPERTY, ADD_TENANT, GET_PROPERTIES, DELETE_PROPERTY } from "../types";

const propertyReducer = (state = [], action) => {
    switch(action.type) {
        case ADD_PROPERTY:
            return [
                ...state,
                action.payload,
            ]
        case GET_PROPERTIES:
            return action.payload
        case ADD_TENANT:
            return state.map((property) => {
                if(property?.name===action.payload?.propertyName) {
                    property?.tenants.push(action.payload);
                }
                return property;
            })
        case DELETE_PROPERTY:
            return state.filter((property) => property?.id!==action.payload?.id);
        default:
            return state
    }
}

export default propertyReducer;
