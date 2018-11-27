import React, { Component } from 'react';
import './account.css';
import AccountDetails from './AccountDetails/AccountDetails';
import ChangePassword from './ChangePassword/ChangePassword';

class Account  extends Component {
    
    constructor(props) {
        super(props);

    }

    render(){

        return(
            <div id="exTab2">	
                <ul className="nav nav-tabs">
                    <li className="active">
                        <a  href="#info" data-toggle="tab">Account Info</a>
                    </li>
                    <li>
                        <a href="#pwd" data-toggle="tab">Change Password</a>
                    </li>
                </ul>

                <div className="tab-content ">
                    <div className="tab-pane active" id="info">
                        {
                            this.props.user.details.data !== null ?
                            <AccountDetails {...this.props}/> : ''
                        }
                    </div>
                    <div className="tab-pane" id="pwd">
                        <ChangePassword {...this.props}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Account;