import {
    LOGIN_PENDING,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    CLEAR_LOGIN_PROPS
} from '../actions/login';


const loginReducer = (state = {}, action) => {
    switch (action.type) {
            case LOGIN_PENDING:
            return {
                ...state,
                pending: true,
                success:false,
                message: null
            }
        break;
        case LOGIN_SUCCESS:
            return {
                ...state,
                pending: false,
                success: true,
            }
        break;
        case LOGIN_ERROR:
            return {
                ...state,
                pending: false,
                success: false, 
                message: action.success.message,
            }
        break;
        case CLEAR_LOGIN_PROPS:
            return {
                ...state,
                success: false
            }
        break;
		default:
		return state;
	}
}

export const userLogin = state => state.pending;
export const userLoginStatus = state => state.success;
export const userLoginErrorMessage = state => state.message
export default loginReducer;