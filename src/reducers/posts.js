import {
    CREATE_POST_ERROR,
    CREATE_POST_SUCCESS,
    CLEAR_CREATE_PROPS,
    GET_POST_SUCCESS
} from '../actions/posts';


const postReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_POST_ERROR:
            return {
                ...state,
                success: false,
                message: action.message
            }
        break;
        case CREATE_POST_SUCCESS:
            return {
                ...state,
                success: action.state.success,
                message: action.state.message
            }
        break;
        case CLEAR_CREATE_PROPS:
            return {
                ...state,
                success: null,
                message: null
            }
        break;
        case GET_POST_SUCCESS:
            console.log("getpossts", state, action);
            return {
                ...state,
            }
        break;
		default:
		return state;
	}
}
export const createPostSuccess = state => state.success;
export const createPostMessage = state => state.message;
export const getForumPosts = state => state;

export default postReducer;