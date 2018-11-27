import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Switch, Route }  from 'react-router-dom'
import Login from './view/Login/'
import Signup from './view/Signup/'
import Home from './view/Home/'


ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route exact path="/login" name="Login Page" component={Login}/>
            <Route exact path="/signup" name="SignUp Page" component={Signup}/>
            <Route path="/" name="Home" component={Home}/>        
        </Switch>
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();


// import './index.css';
// import Icon from './anil.png';
// import Data from './data.xml';
// function component() {
//     var element = document.createElement('div');

//     // Lodash, currently included via a script, is required for this line to work
//     // Lodash, now imported by this script
//     element.innerHTML = "WELCOME";
//     element.classList.add('hello');

//  // Add the image to our existing div.
//     var myIcon = new Image();
//     myIcon.src = Icon;
 
//     element.appendChild(myIcon);
//     console.log(Data);
//     return element;
// }

document.body.appendChild(component());