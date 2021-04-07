import {
    CREATE_USER_PENDING,
    CREATE_USER_SUCCESS,
    CREATE_USER_ERROR,
    CLEAR_DEFAULT_PROPS 
} from '../actions/signUp';

const signUpReducer = (state = {}, action) => {
    switch (action.type) {
            case CREATE_USER_PENDING:
            return {
                ...state,
                pending: true,
                success:false,
                message: null
            }
        break;
        case CREATE_USER_SUCCESS:
            return {
                ...state,
                pending: false,
                success: true,
                message: "User created successfully.",
            }
        break;
        case CREATE_USER_ERROR:
            return {
                ...state,
                pending: false,
                success: false, 
                message: action.error.message
            }
        break;
        case CLEAR_DEFAULT_PROPS:
            return {
                ...state,
                message: null
            }
        break;
		default:
		return state;
	}
}
export const userCreate = state => state.pending;
export const userCreateError = state => state.success;
export const userErrorMessage = state => state.message

export default signUpReducer;