import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'

class Login extends Component {
    
    responseFacebook = (response) => {
        console.log(response)
    }

    render(){
        return(
            <div className="container-fluid">

                <FacebookLogin
                    appId="2125642360998675"
                    autoLoad={true}
                    fields="name,email,picture"
                    callback={this.responseFacebook}
                />

            </div>
        )
    }
}

export default Login;