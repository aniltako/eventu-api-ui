import {
    SAVE_USER_INFO, SAVE_USER_INFO_SUCCESS, SAVE_USER_INFO_FAILURE,
    GET_USER_INFO, GET_USER_INFO_SUCCESS, GET_USER_INFO_FAILURE,
    RESET_USER_INFO
} from '../actions/userInfoActions';

let INITIAL_STATE = {
    userInfo: {
        loading: false,
        error: null,
        data: null,
    }
}
  
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case SAVE_USER_INFO:
            state = {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    loading: action.loading,
                    error: null,
                    data: null,
                }
            };
            break;


        case SAVE_USER_INFO_SUCCESS:
            state = {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    loading: false,
                    error: null,
                    data: action.userInfo,
                }
            };

            break;

        case SAVE_USER_INFO_FAILURE:
            state = {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    loading: false,
                    error: action.error,
                    data: null,
                }
            };
            break;


        case GET_USER_INFO:
            state = {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    loading: action.loading,
                    error: null,
                    data: null,
                }
            };
            break;


        case GET_USER_INFO_SUCCESS:
            state = {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    loading: false,
                    error: null,
                    data: action.userInfo,
                }
            };

            break;

        case GET_USER_INFO_FAILURE:
            state = {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    loading: false,
                    error: action.error,
                    data: null,
                }
            };
            break;
  
        case RESET_USER_INFO:
            state = {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    loading: false,
                    error: null,
                    data: null
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