import { ROOT_URL } from '../app-config';

export const SAVE_USER_INFO = "SAVE_USER_INFO"
export const SAVE_USER_INFO_SUCCESS = "SAVE_USER_INFO_SUCCESS"
export const SAVE_USER_INFO_FAILURE = "SAVE_USER_INFO_FAILURE"

export const GET_USER_INFO = "GET_USER_INFO"
export const GET_USER_INFO_SUCCESS = "GET_USER_INFO_SUCCESS"
export const GET_USER_INFO_FAILURE = "GET_USER_INFO_FAILURE"

export const RESET_USER_INFO = "RESET_USER_INFO";

export function saveUserInfo(userInfo, token) {
    return function (dispatch) {
        dispatch({type: SAVE_USER_INFO, loading: true})

        return fetch(ROOT_URL+'userInfo/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': token
            },
            body: JSON.stringify(userInfo)
        })
        .then((response) => {
            if(response.status === 200){
                response.json().then(function(result){
                    dispatch(saveUserInfoSuccess(result));
                });
            }else{
                response.json().then(function(result){
                    dispatch(saveUserInfoFailure(result));
                });
            }  
        }).catch((error) => {
            dispatch(saveUserInfoFailure(error))
        });
    }
}

export function saveUserInfoSuccess(userInfo) {
    return {
        type: SAVE_USER_INFO_SUCCESS, loading: false,
        userInfo: userInfo
    };
}

export function saveUserInfoFailure(error) {
    return {
        type: SAVE_USER_INFO_FAILURE, loading: false, error: error
    };
}

export function getUserInfo(token) {
    return function (dispatch) {
        dispatch({type: GET_USER_INFO, loading: true})

        return fetch(ROOT_URL+'userInfo', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': token
            }
        })
        .then((response) => {
            if(response.status === 200){
                response.json().then(function(result){
                    dispatch(getUserInfoSuccess(result[0]));
                });
            }else{
                response.json().then(function(result){
                    dispatch(getUserInfoFailure(result));
                });
            }  
        }).catch((error) => {
            dispatch(getUserInfoFailure(error))
        });
    }
}

export function getUserInfoSuccess(userInfo) {
    return {
        type: GET_USER_INFO_SUCCESS, loading: false,
        userInfo: userInfo
    };
}

export function getUserInfoFailure(error) {
    return {
        type: GET_USER_INFO_FAILURE, loading: false, error: error
    };
}


export function resetUserInfoData() {
 	 return { type: RESET_USER_INFO }
}
