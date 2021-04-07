export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const CLEAR_LOGIN_PROPS = 'CLEAR_LOGIN_PROPS';


export function loginPending() {
    return {
        type: LOGIN_PENDING
    }
}

export function loginSuccess(data) {
    return {
        type: LOGIN_SUCCESS,
        success: data
    }
}

export function loginError(data) {
    return {
        type: LOGIN_ERROR,
        success: data
    }
}

export function clearLoginProps(data) {
    return {
        type: CLEAR_LOGIN_PROPS,
        state: data
    }
}

