
export const CREATE_POST_ERROR = 'CREATE_POST_ERROR';
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const CLEAR_CREATE_PROPS = 'CLEAR_CREATE_PROPS';
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS';



export function createPostError(message) {
    return {
        type: CREATE_POST_ERROR,
        message: message
    }
}
export function createPostSuccess(state) {
    return {
        type: CREATE_POST_SUCCESS,
        state: state
    }
}
export function clearCreateProps(state) {
    return {
        type: CLEAR_CREATE_PROPS,
        state: state
    }
}

export function getPostsSuccess(state) {
    return {
        type: GET_POST_SUCCESS,
        data: state
    }
}

