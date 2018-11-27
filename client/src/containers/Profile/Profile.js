import { connect } from 'react-redux';
import { getUserInfo } from '../../actions/userInfoActions';
import { fetchUserDetails, fetchUserDetailsFailure, changePassword } from '../../actions/userActions'

import Profile from '../../view/Profile/';

/**
 * returns new prop so that in our "Login" component,
 * the new prop will be the prop that is referred
 * @param {*} state 
 */
const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
        userInfo: state.userInfoReducer.userInfo
    }
}

/**
 * return the dispatching of an actions from the action creators 
 * fetch data and share the data across the "Login" components accessing with same name
 * @param {*} dispatch 
 */
const mapDispatchToProps = (dispatch) => {
    return {
        getUserInfo: (token) => {
            dispatch(getUserInfo(token))
        },
        fetchUserDetails: (token) => {
            dispatch(fetchUserDetails(token))
        },
        changePassword: (curPwd, newPwd, confirmPwd, id, token) => {
            dispatch(changePassword(curPwd, newPwd, confirmPwd, id, token))
        }
    }
}

/**
 *  connects the data in mapStateToProps() (the data portion of the state) to the "Login" component
 *  mapDispatchToProps adds new props that points to action creators 
 */
const ProfileContainer = connect(mapStateToProps, mapDispatchToProps, null)(Profile);

export default ProfileContainer;
