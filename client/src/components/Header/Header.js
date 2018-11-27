import React, { Component } from 'react';
import { Switch, Route, Link }  from 'react-router-dom'
import './header.css';

class Header extends Component {
    
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="row">
                <div className="col-md-12">
                    <div className="header">
                        <nav className="navbar navbar-inverse">
                            <div className="container-fluid">
                                <div className="navbar-header">
                                    <Link className="navbar-brand" to="/">Home Tuition</Link>
                                </div>
                                <ul className="nav navbar-nav navbar-right">
                                    <li><Link to="/profile"><span className="glyphicon glyphicon-user"></span> Profile </Link></li>
                                    <li><Link to="/profile"><span className="glyphicon glyphicon-log-out"></span> Sign Out</Link></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;