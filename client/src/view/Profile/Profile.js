import React, { Component } from 'react';
import { Switch, Route, Link }  from 'react-router-dom'
import './profile.css';
import Header from '../../components/Header';
import ProfileDetails from './ProfileDetails'
import Account from './Account/Account';
import Cookies from 'universal-cookie';

const cookies = new Cookies()

class Profile extends Component {
    
    constructor(props) {
        super(props);
    }

    componentWillMount(){
        if(cookies.get('htToken') === undefined ){
            this.props.history.push('/login');
        }

        this.props.fetchUserDetails(cookies.get('htToken'));
    }
    
    render(){

        return(

            <div className="container">
                <Header />
                <div className="row profile">
                    <div className="col-md-3">
                        <div className="profile-sidebar">
                            {/* SIDEBAR USERPIC */}
                            <div className="profile-userpic">
                                
                            </div>
                            {/* END SIDEBAR USERPIC
                            SIDEBAR USER TITLE */}
                            <div className="profile-usertitle">
                                <div className="profile-usertitle-name">
                                    Marcus Doe
                                </div>
                                <div className="profile-usertitle-job">
                                    Developer
                                </div>
                            </div>
                            {/* END SIDEBAR USER TITLE
                            SIDEBAR MENU */}
                            <div className="profile-usermenu">
                                <ul className="nav">
                                    <li className="active">
                                        <Link to={`${this.props.match.url}`}><i className="glyphicon glyphicon-home"></i>Profile</Link>
                                    </li>
                                    <li>
                                        <Link to={`${this.props.match.url}/account`}><i className="glyphicon glyphicon-user"></i>Account</Link>
                                    </li>
                                    <li>
                                        <Link to={`${this.props.match.url}/status`}><i className="glyphicon glyphicon-ok"></i>Status</Link>
                                    </li>
                                    <li>
                                        <Link to={`${this.props.match.url}/help`}><i className="glyphicon glyphicon-flag"></i>Help</Link>
                                    </li>
                                </ul>
                            </div>
                            {/* END MENU */}
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="profile-content">
                            <Route exact path="/profile" name="ProfileDetails" render={(props) =>(
                                    <ProfileDetails {...this.props}/>)} />
                            <Route exact path="/profile/account" name="Account"  render={(props) =>(
                                    <Account {...this.props}/>)} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;