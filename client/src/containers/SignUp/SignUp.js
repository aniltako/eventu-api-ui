import { connect } from 'react-redux';
import { signUp } from '../../actions/userActions';

import SignUp from '../../view/SignUp/';

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
        
        signUp: (user) => {
            dispatch(signUp(user));
        }
    }
}

/**
 *  connects the data in mapStateToProps() (the data portion of the state) to the "Login" component
 *  mapDispatchToProps adds new props that points to action creators 
 */
const SignUpContainer = connect(mapStateToProps, mapDispatchToProps, null)(SignUp)

export default SignUpContainer
