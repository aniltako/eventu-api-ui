import React, { Component } from 'react'
require('./script');

class OthersForm extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            education: {
                cvLink: ''
            }
        }
    }

    handleCVLinkChange= (e) => {
        let tempEducation = this.state.education;
        tempEducation.academicDegree = e.target.value;
        this.setState({
            education: tempEducation
        })
    }

    handlePreviousClick = (e) => {
        e.preventDefault();
        this.props.nextStep(3);
    }

    handleDoneClick = (e) => {
        e.preventDefault();

        let tempEducation = this.state.education;
        console.log(this.state.education);
        // this.props.signUp(this.state.user);
        
    }

    render(){

        let user = this.props.user;
        console.log(user);

        let errorMsg = null;
        if( user.signUp.error !== null ){
            errorMsg = 
                <div className="alert alert-danger" role="alert">
                    <strong>Error !</strong> { user.signUp.error.message } 
                </div>
        }

        return(
            <div className="container main-container">
                { errorMsg }
                <div className="container registration-form-container">
                    <h3>Others</h3><br/>
                    <form method="POST" action="#" encType="multipart/form-data">
                        <div className="form-group">
                            <label htmlFor="cvLink">CV Link:</label>
                            <div className="input-group input-file" name="Fichier1">
                                <input id="cvLink" type="text" className="form-control" placeholder='Choose a file...' />			
                                <span className="input-group-btn">
                                    <button className="btn btn-default btn-choose" type="button">Choose</button>
                                </span>
                            </div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary pull-right" disabled>Submit</button>
                            <button type="reset" className="btn btn-danger">Reset</button>
                        </div>


                        <button type="submit" className="btn btn-default" onClick={this.handlePreviousClick}>PRE</button>                        
                        <button type="submit" className="btn btn-default" onClick={this.handleDoneClick}>DONE</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default OthersForm;