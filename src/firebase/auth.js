import {createUserPending, createUserSuccess, createUserError} from '../actions/signUp';
import {loginPending, loginSuccess, loginError} from '../actions/login';
import { createActiveUser } from '../actions/user';
import { auth } from './firebaseConfig';
export const createNewUser = (data) => {
    return dispatch => {
        console.log("SIGNUPDATA", data);
        dispatch(createUserPending());
        auth.createUserWithEmailAndPassword(data.email, data.password).then(r => {
            r.user.updateProfile({
                displayName: data.username
              }).then((result) => {
                dispatch(createUserSuccess({
                    error: true,
                    message: "created successfully",
                    username: data.username
                }));
                
              }).catch((error) => {
                dispatch(createUserError({
                    error: false,
                    message: error.message
                }));
              });
        }).catch(error => {
            dispatch(createUserError({
                error: false,
                message: error.message
            }));
        });
    }
}
export const logInUser = (data) => {
    return dispatch => {
        dispatch(loginPending());
        auth.signInWithEmailAndPassword(data.email, data.password).then(r => {
            dispatch(loginSuccess({
                success: true,
                username: r.user.displayName
            }));
            dispatch(createActiveUser({
                isLoggedIn: true,
                username: r.user.displayName
            }));
        }).catch(error => {
            dispatch(loginError({
                success: false,
                message: error.message
            }));
        });
    }
}

