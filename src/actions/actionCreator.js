import { clearDefaultProps } from './signUp';
import { clearCreateProps } from './posts';
import { clearLoginProps } from './login';
export function clearSignUpProps(data) {
    return dispatch => {
        dispatch(clearDefaultProps(data));
    }
}
export function clearCreatePostProps(data) {
    return dispatch => {
        dispatch(clearCreateProps(data));
    }
}

export function clearLoginpProcessProps(data) {
    return dispatch => {
        dispatch(clearLoginProps(data));
    }
}