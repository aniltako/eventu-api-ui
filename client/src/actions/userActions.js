import { ROOT_URL } from '../app-config';

export const SIGN_UP = 'SIGN_UP';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const FETCH_USER_DETAILS = 'FETCH_USER_DETAILS'
export const FETCH_USER_DETAILS_SUCCESS = 'FETCH_USER_DETAILS_SUCCESS'
export const FETCH_USER_DETAILS_FAILURE = 'FETCH_USER_DETAILS_FAILURE'

export const CHANGE_PASSWORD = "CHANGE_PASSWORD"
export const CHANGE_PASSWORD_SUCCESS = "CHANGE_PASSWORD_SUCCESS"
export const CHANGE_PASSWORD_FAILURE = "CHANGE_PASSWORD_FAILURE"

export const RESET_USER_DATA = "RESET_USER_DATA";

export function login(email, password) {
    return function (dispatch) {

        dispatch({type: LOGIN, loading: true})

        return fetch(ROOT_URL+'/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        }).then((response) => {
                if(response.status === 200){
                    response.json().then(function(result){
                        dispatch(loginSuccess(result));
                    });
                }else{
                    response.json().then(function(result){
                        dispatch(loginFailure(result));
                    });
                }
        }).catch((error) => {
                dispatch(loginFailure(error))
        });
    }
}

export function loginSuccess(json) {
    return {
        type: LOGIN_SUCCESS, loading: false,
        data: json
    };
}

export function loginFailure(error) {
    return {
        type: LOGIN_FAILURE, loading: false,
        error: error
    };
}

export function signUp(user) {
    return function (dispatch) {
        
        dispatch({type: SIGN_UP, loading: true});

        return fetch(ROOT_URL+'signUp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        }).then(function(response) {
            if(response.status === 200){
                response.json().then(function(result){
                    dispatch(signUpSuccess(result));
                });
            }else{
                response.json().then(function(result){
                    dispatch(signUpFailure(result));
                });
            }
        }).catch((error) => {
            dispatch(signUpFailure(error))
        });
    }
}

export function signUpSuccess(response) {
    return {
        type: SIGN_UP_SUCCESS, loading: false,
        data: response
    };
}

export function signUpFailure(error) {
    return {
        type: SIGN_UP_FAILURE, loading: false,
        error: error
    };
}

export function fetchUserDetails(token) {
    return function (dispatch) {
        
        dispatch({type: FETCH_USER_DETAILS, loading: true});

        return fetch(ROOT_URL+'auth/me', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': token
            }
        }).then(function(response) {
            if(response.status === 200){
                response.json().then(function(result){
                    dispatch(fetchUserDetailsSuccess(result));
                });
            }else{
                response.json().then(function(result){
                    dispatch(fetchUserDetailsFailure(result));
                });
            }
        }).catch((error) => {
            dispatch(fetchUserDetailsFailure(error))
        });
    }
}

export function fetchUserDetailsSuccess(response) {
    return {
        type: FETCH_USER_DETAILS_SUCCESS, loading: false,
        data: response
    };
}

export function fetchUserDetailsFailure(error) {
    return {
        type: FETCH_USER_DETAILS_FAILURE, loading: false,
        error: error
    };
}

export function updateUser(user, token) {

  return function (dispatch) {

    dispatch({type: UPDATE_USER, loading: true})

    return fetch(ROOT_URL+'user/'+user.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token
      },
      body: JSON.stringify({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        companyName: user.companyName,
        emailReportSetting: user.emailReportSetting,
      })
    })
      .then((response) => response.json())
      .then((responseData) => {

        if(responseData.error){
          dispatch(updateUserFailure(responseData))

        }else{

          dispatch(updateUserSuccess(responseData))
        }
      })
      .catch((error) => {
        dispatch(updateUserFailure(error))
      });
  }
}

export function updateUserSuccess(responseData) {

  return function (dispatch) {

    dispatch({type: UPDATE_USER_SUCCESS, user:responseData, updateSuccess: true, loading: false})

  }
}

export function updateUserFailure(error) {
  return {
    type: UPDATE_USER_FAILURE, loading: false
  };
}

export function changePassword(currentPassword, newPassword, confirmPassword, id, token) {

  return function (dispatch) {

    dispatch({type: CHANGE_PASSWORD, loading: true})

    return fetch(ROOT_URL+'changePassword/'+id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token
      },
      body: JSON.stringify({
        password: currentPassword,
        newPassword: newPassword,
        confirmPassword: confirmPassword
      })
    }).then((response) => function(){
        if(response.status === 200){
            response.json().then(function(result){
                dispatch(changePasswordSuccess(result));
            });
        }else{
            response.json().then(function(result){
                dispatch(changePasswordFailure(result));
            });
        }
    }).catch((error) => {
          dispatch(changePasswordFailure(error))
    });
  }
}

export function changePasswordSuccess(responseData) {
    return {type: CHANGE_PASSWORD_SUCCESS, data:responseData, loading: false}
}

export function changePasswordFailure(error) {
    return {type: CHANGE_PASSWORD_FAILURE, loading: false, error: error};
}

export function resetUserData() {
 	 return function (dispatch) {
		return { type: RESET_USER_DATA }
	}
}
