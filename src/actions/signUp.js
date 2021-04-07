export const CREATE_USER_PENDING = 'CREATE_USER_PENDING';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_ERROR = 'CREATE_USER_ERROR';
export const CLEAR_DEFAULT_PROPS = 'CLEAR_DEFAULT_PROPS';


export function createUserPending() {
    return {
        type: CREATE_USER_PENDING
    }
}

export function createUserSuccess(state) {
    return {
        type: CREATE_USER_SUCCESS,
        error: state
    }
}

export function createUserError(error) {
    return {
        type: CREATE_USER_ERROR,
        error: error
    }
}
export function clearDefaultProps(state) {
    return {
        type: CLEAR_DEFAULT_PROPS,
        state: state
    }
}

