export const FETCH_USER = "FETCH_USER";
export const FETCH_USER_FULFILLED = "FETCH_USER_FULFILLED";

export const fetchUser = username =>({type:FETCH_USER,payload:username});
export const fetchUserFulfilled = payload =>({type:FETCH_USER_FULFILLED,payload});
