import {
    SIGN_UP, SIGN_UP_SUCCESS, SIGN_UP_FAILURE,
    LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE,
    FETCH_USER_DETAILS, FETCH_USER_DETAILS_SUCCESS, FETCH_USER_DETAILS_FAILURE,
    UPDATE_USER, UPDATE_USER_SUCCESS, UPDATE_USER_FAILURE,
    CHANGE_PASSWORD, CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_FAILURE,
    RESET_USER_DATA, RESET_USER, RESET_ERROR_MESSAGE,
} from '../actions/userActions'

let INITIAL_STATE = {
    user: {
        login: {
            loading: false,
            error: null,
            data: null,
        },
        signUp: {
            loading: false,
            error: null,
            data: null
        },
        details:{
            loading: false,
            error: null,
            data: null
        },
        changePassword: {
            loading: false,
            error: null
        }
    }
}
  
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case SIGN_UP:
            state = {
                ...state,
                user: {
                    ...state.user,
                    signUp:{
                        ...state.user.signUp,
                        loading: action.loading,
                        error: null,
                        data: null,
                    }
                }
            };
            break;


        case SIGN_UP_SUCCESS:
            state = {
                ...state,
                user: {
                    ...state.user,
                    signUp:{
                        ...state.user.signUp,
                        loading: false,
                        data: action.data,
                    }
                }
            };

            break;

        case SIGN_UP_FAILURE:
            state = {
                ...state,
                user: {
                    ...state.user,
                    signUp:{
                        ...state.user.signUp,
                        loading: false,
                        error: action.error,
                        data: null,
                    }
                }
            };
            break;
        
        case LOGIN:
            state = {
                ...state,
                user: {
                    ...state.user,
                    login:{
                        ...state.user.login,
                        loading: action.loading,
                        error: null,
                        data: null,
                    }
                }
            };
            break;


        case LOGIN_SUCCESS:
            state = {
                ...state,
                user: {
                    ...state.user,
                    login:{
                        ...state.user.login,
                        loading: false,
                        data: action.data,
                    }
                }
            };

            break;

        case LOGIN_FAILURE:
            state = {
                ...state,
                user: {
                    ...state.user,
                    login:{
                        ...state.user.login,
                        loading: false,
                        error: action.error,
                        data: null,
                    }
                }
            };
            break;

        case FETCH_USER_DETAILS:
            state = {
                ...state,
                user: {
                    ...state.user,
                    details:{
                        ...state.user.details,
                        loading: action.loading,
                        error: null,
                        data: null,
                    }
                }
            };
            break;


        case FETCH_USER_DETAILS_SUCCESS:
            state = {
                ...state,
                user: {
                    ...state.user,
                    details:{
                        ...state.user.details,
                        loading: false,
                        data: action.data,
                    }
                }
            };

            break;

        case FETCH_USER_DETAILS_FAILURE:
            state = {
                ...state,
                user: {
                    ...state.user,
                    details:{
                        ...state.user.details,
                        loading: false,
                        error: action.error,
                        data: null,
                    }
                }
            };
            break;
  

        case CHANGE_PASSWORD:
            state = {
                ...state,
                user: {
                    ...state.user,
                    changePassword:{
                        ...state.user.changePassword,
                        loading: action.loading,
                        error: null
                    }
                }
            };
            break;


        case CHANGE_PASSWORD_SUCCESS:
            state = {
                ...state,
                user: {
                    ...state.user,
                    changePassword:{
                        ...state.user.changePassword,
                        loading: false
                    },
                    details: {
                        ...state.user.details,
                        data: action.data
                    }
                }
            };

            break;

        case CHANGE_PASSWORD_FAILURE:
            state = {
                ...state,
                user: {
                    ...state.user,
                    changePassword:{
                        ...state.user.changePassword,
                        loading: false,
                        error: action.error
                    }
                }
            };
            break;

        case RESET_USER_DATA:
            state = {
                ...state,
                user: {
                    ...state.user,
                    signUp: {
                        ...state.user.signUp,
                        loading: false,
                        error: null,
                        data: null
                    },
                    login: {
                        ...state.user.login,
                        loading: false,
                        error: null,
                        data: null
                    }
                    
                }
            };
            break;

    
        default:
            state = {
                ...state
            }
            break;
  
    }
    return state;
};

export default userReducer;