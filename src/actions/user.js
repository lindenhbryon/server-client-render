export const CREATE_ACTIVE_USER = 'CREATE_ACTIVE_USER';
export const LOGOUT_ACTIVE_USER = 'LOGOUT_ACTIVE_USER';



export function createActiveUser(data) {
    return {
        type: CREATE_ACTIVE_USER,
        user: data
    }
}
export function LogoutActiveUser(data) {
    return {
        type: LOGOUT_ACTIVE_USER,
        user: data
    }
}

