import {
    CREATE_ACTIVE_USER,
    LOGOUT_ACTIVE_USER,
} from '../actions/user';


const userReducer = (state = {}, action) => {
    switch (action.type) {
            case CREATE_ACTIVE_USER:
            return {
                ...state,
                isLoggedIn: true,
                username: action.user.username
            }
        break;
        case LOGOUT_ACTIVE_USER:
            return {
                ...state,
                isLoggedIn: true,
                username: null
            }
        break;
		default:
		return state;
	}
}

export default userReducer;