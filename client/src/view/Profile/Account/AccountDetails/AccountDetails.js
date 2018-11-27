import React, { Component } from 'react';
import './accountdetails.css';

class AccountDetails  extends Component {
    
    constructor(props) {
        super(props);

    }

    render(){
        const user = this.props.user.details.data;

        return(
            <div className="card-body">
                <div className="row">
                    <div className="col-md-4">
                        Email
                    </div>
                    <div className="col-md-8">
                        {user.email}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        User Name
                    </div>
                    <div className="col-md-8">
                        {user.username}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        First Name
                    </div>
                    <div className="col-md-8">
                        {user.firstName}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        Last Name
                    </div>
                    <div className="col-md-8">
                        {user.lastName}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        Address
                    </div>
                    <div className="col-md-8">
                        null
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        Gender
                    </div>
                    <div className="col-md-8">
                        {user.gender}
                    </div>
                </div>
            </div>
        )
    }
}

export default AccountDetails;