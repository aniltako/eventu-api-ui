import { connect } from 'react-redux';
import { login } from '../../actions/userActions';

import Login from '../../view/Login/';

/**
 * returns new prop so that in our "Login" component,
 * the new prop will be the prop that is referred
 * @param {*} state 
 */
const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user
    }
}

/**
 * return the dispatching of an actions from the action creators 
 * fetch data and share the data across the "Login" components accessing with same name
 * @param {*} dispatch 
 */
const mapDispatchToProps = (dispatch) => {
    return {
        
        login: (email, password) => {
            dispatch(login(email, password));
        }
    }
}

/**
 *  connects the data in mapStateToProps() (the data portion of the state) to the "Login" component
 *  mapDispatchToProps adds new props that points to action creators 
 */
const LoginContainer = connect(mapStateToProps, mapDispatchToProps, null)(Login)

export default LoginContainer
