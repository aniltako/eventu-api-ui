import React, { Component } from 'react';
import Cookies from 'universal-cookie';
require('./signup.css');

const cookies = new Cookies();

class SignUp extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                email: '',
                username: '',
                password: '',
                gender: '',
                age: '',
                role: ''
            }
        }
    }

    componentWillReceiveProps(nextProps){
        if((nextProps.user.signUp.data !== null && !nextProps.user.signUp.loading) || 
            cookies.get('htToken') !== undefined){
            cookies.set('htToken', nextProps.user.signUp.data.token);
            if(this.state.user.role==='parent' || this.state.user.role==='student')
                this.props.history.push('/');
            else    
                this.props.onNextStep(2);
        }
    }

    handleFirstNameChange = (e) => {
        let tempUser = this.state.user;
        tempUser.firstName = e.target.value;
        this.setState({
            user: tempUser
        })
    }

    handleLastNameChange = (e) => {
        let tempUser = this.state.user;
        tempUser.lastName = e.target.value;
        this.setState({
            user: tempUser
        })
    }

    handleEmailChange = (e) => {
        let tempUser = this.state.user;
        tempUser.email = e.target.value;
        this.setState({
            user: tempUser
        })
    }

    handleUsernameChange = (e) => {
        let tempUser = this.state.user;
        tempUser.username = e.target.value;
        this.setState({
            user: tempUser
        })
    }

    handlePasswordChange = (e) => {
        let tempUser = this.state.user;
        tempUser.password = e.target.value;
        this.setState({
            user: tempUser
        })
    }

    handleGenderChange = (e) => {
        let tempUser = this.state.user;
        tempUser.gender = e.target.value;
        this.setState({
            user: tempUser
        })
    }

    handleAgeChange = (e) => {
        let tempUser = this.state.user;
        tempUser.age = e.target.value;
        this.setState({
            user: tempUser
        })
    }

    handleRoleChange = (e) => {
        let tempUser = this.state.user;
        tempUser.role = e.target.value;
        this.setState({
            user: tempUser
        })
    }

    handleSignUp = (e) => {
        e.preventDefault();

        let tempUser = this.state.user;
        tempUser.age = Number(this.state.user.age);
        this.props.signUp(this.state.user);
    
    }

    handleLogin = (e) => {
        e.preventDefault();
        this.props.history.push('/login');
    }

    render(){

        let user = this.props.user;

        let errorMsg = null;

        if( user.signUp.error !== null ){
            errorMsg = 
                <div className="alert alert-danger" role="alert">
                    <strong>Error !</strong> { user.signUp.error.message } 
                </div>
        }

        return(
            <div id="signup-container" className="container">
                { errorMsg }
                <h3>Sign up</h3><br/>
                <form>
                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="firstName">First Name:</label>
                            <input type="text" className="form-control" id="firstName" onChange={this.handleFirstNameChange}/>
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="lastName">Last Name:</label>
                            <input type="text" className="form-control" id="lastName" onChange={this.handleLastNameChange}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address:</label>
                        <input type="email" className="form-control" id="email" onChange={this.handleEmailChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="userName">User Name:</label>
                        <input type="text" className="form-control" id="userName" onChange={this.handleUsernameChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Password:</label>
                        <input type="password" className="form-control" id="pwd" onChange={this.handlePasswordChange}/>
                    </div>
                    <div className="form-group row">
                        <div className="form-check col-sm-4">
                            <label>Gender:</label>
                        </div>
                        <div className="form-check col-sm-4">
                            <input className="form-check-input" type="radio" name="gender" id="male" value="male" onChange={this.handleGenderChange}/>
                            <label className="form-check-label" htmlFor="male">
                                Male
                            </label>
                        </div>
                        <div className="form-check col-sm-4">
                            <input className="form-check-input" type="radio" name="gender" id="female" value="female" onChange={this.handleGenderChange}/>
                            <label className="form-check-label" htmlFor="female">
                                Female
                            </label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age:</label>
                        <input type="number" className="form-control" id="age" onChange={this.handleAgeChange}/>
                    </div>
                    <div className="form-group row">
                        <div className="form-check col-sm-3">
                            <label>Sign Up As:</label>
                        </div>
                        <div className="form-check col-sm-3">
                            <input className="form-check-input" type="radio" name="role" id="student" value="student" onChange={this.handleRoleChange}/>
                            <label className="form-check-label" htmlFor="student">
                                Student
                            </label>
                        </div>
                        <div className="form-check col-sm-3">
                            <input className="form-check-input" type="radio" name="role" id="parent" value="parent" onChange={this.handleRoleChange}/>
                            <label className="form-check-label" htmlFor="parent">
                                Parent
                            </label>
                        </div>
                        <div className="form-check col-sm-3">
                            <input className="form-check-input" type="radio" name="role" id="teacher" value="teacher" onChange={this.handleRoleChange}/>
                            <label className="form-check-label" htmlFor="teacher">
                                Teacher
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleSignUp}>Sign Up</button>
                    <button type="submit" className="btn btn-primary pull-right" onClick={this.handleLogin}>Login</button>                        
                </form>
            </div>
        )
    }
}

export default SignUp;