import React, { Component } from 'react'
import DateForm from '../../../components/DateForm/DateForm';

class CertificationForm extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            certifications: {
                title: '',
                sourceLink: '',
                startDate: '',
                endDate: ''
            },
            doneButtonEnable: true,
            moreButtonEnable: false
        }
    }

    handleTitleChange= (e) => {
        let tempCertification = this.state.certifications;
        tempCertification.title = e.target.value;
        this.setState({
            certifications: tempCertification
        }, function(){
            this.verifyField();
        });
    }

    handleSourceLinkChange= (e) => {
        let tempCertification = this.state.certifications;
        tempCertification.sourceLink = e.target.value;
        this.setState({
            certifications: tempCertification
        }, function(){
            this.verifyField();
        });
    }

    handleStartDate = (date) => {
        let tempCertification = this.state.certifications;
        tempCertification.startDate = date;
        this.setState({
            certifications: tempCertification
        }, function(){
            this.verifyField();
        });
    }

    handleEndDate= (date) => {
        let tempCertification = this.state.certifications;
        tempCertification.endDate = date;
        this.setState({
            certifications: tempCertification
        }, function(){
            this.verifyField();
        });
    }

    verifyField = () => {

        const certifications = this.state.certifications;

        if( certifications.title !==''){
            this.setState({
                doneButtonEnable: true,
                moreButtonEnable: true
            });
        }else{
            this.setState({
                doneButtonEnable: false,
                moreButtonEnable: false
            });
        }
    }

    handlePreviousClick = (e) => {
        e.preventDefault();
        this.props.nextStep(3);
    }

    handleAddMoreClick = (e) => {
        e.preventDefault();

        let tempCertifications = this.state.certifications;
        this.setState({
            certifications: {
                title: '',
                sourceLink: '',
                startDate: '',
                endDate: ''
            },
            doneButtonEnable: true,
            moreButtonEnable: false
        }, function(){
            if( tempCertifications.title !=='')
                this.props.onAddMoreCertifications(tempCertifications);
            else
                this.props.onAddMoreCertifications(null);                
        });
    }
   
    handleDoneClick = (e) => {
        e.preventDefault();
        if(this.state.certifications.title !== '')
            this.props.onFinishedCertificationForm(this.state.certifications);
        else
            this.props.onFinishedCertificationForm(null);
    }

    render(){

        const certifications = this.state.certifications;

        return(
            <div id="certification-form-container" className="container">
                <h3>Certification</h3><br/>
                <form>
                    <div className="form-group">
                        <label htmlFor="title">Title:</label>
                        <input type="text" className="form-control" id="title" value={certifications.title} onChange={this.handleTitleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="sourceLink">Source Link:</label>
                        <input type="text" className="form-control" id="sourceLink" value={certifications.sourceLink} onChange={this.handleSourceLinkChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="startDate">Start Date:</label>
                        <DateForm date={certifications.startDate} onChange={this.handleStartDate}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="startDate">End Date:</label>
                        <DateForm date={certifications.endDate} onChange={this.handleEndDate}/>
                    </div>
                    <button type="submit" className="btn btn-secondary" onClick={this.handlePreviousClick}>PRE</button>                        
                    <button type="submit" className="btn btn-info" onClick={this.handleAddMoreClick}>ADD MORE</button>                        
                    <button type="submit" className="btn btn-success pull-right" onClick={this.handleDoneClick}>DONE</button>
                </form>
            </div>
        )
    }
}

export default CertificationForm;