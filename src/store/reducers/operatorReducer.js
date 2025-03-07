import {
    GET_OPERATORS,
    GET_OPERATOR,
    IS_EDIT
} from "../actionType";


const initialState = {
    operators: [],
    operator: {},
    isEdit: false
}

export const operatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_OPERATORS:
            return {
                ...state,
                operators: action.payload
            }
        case GET_OPERATOR:
            return {
                ...state,
                operator: action.payload
            }

        case IS_EDIT:
            return {
                ...state,
                isEdit: action.payload
            }

        default:
            return state;
    }
}