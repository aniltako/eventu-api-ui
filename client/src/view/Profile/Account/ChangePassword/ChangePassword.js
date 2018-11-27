import React, { Component } from 'react';
import './changepassword.css';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class ChangePassword  extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            curPwd: '',
            newPwd: '',
            confirmPwd: ''
        }

    }

    handleCurrentPasswordChange = (e) => {
        e.preventDefault();

        this.setState({
            curPwd: e.target.value
        });
    }

    handleNewPasswordChange = (e) => {
        e.preventDefault();

        this.setState({
            newPwd: e.target.value
        });
    }

    handleConfirmPasswordChange = (e) => {
        e.preventDefault();

        this.setState({
            confirmPwd: e.target.value
        });
    }

    handleChangePassword = (e) => {
        e.preventDefault();

        if(cookies.get('htToken') !== undefined ){
            this.props.changePassword(this.state.curPwd, this.state.newPwd, this.state.confirmPwd, 
                this.props.user.details.data._id, cookies.get('htToken'));
        }
    }

    render(){

        return(
            <div className="card-body">
                <div className="form-group row">
                    <label htmlFor="curPwd" className="col-md-4 col-form-label">Current Password:</label>
                    <div className="col-md-4">
                        <input type="password" value={this.state.curPwd} className="form-control" id="curPwd" onChange={this.handleCurrentPasswordChange}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="curPwd" className="col-md-4 col-form-label">New Password:</label>
                    <div className="col-md-4">
                        <input type="password" value={this.state.newPwd} className="form-control" id="newPwd" onChange={this.handleNewPasswordChange}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="curPwd" className="col-md-4 col-form-label">Confirm Password:</label>
                    <div className="col-md-4">
                        <input type="password" value={this.state.confirmPwd} className="form-control" id="confirmPwd" onChange={this.handleConfirmPasswordChange}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <button className="btn btn-primary" onClick={this.handleChangePassword}>Save</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChangePassword;