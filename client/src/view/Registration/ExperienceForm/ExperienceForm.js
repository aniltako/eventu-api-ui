import React, { Component } from 'react'
import DateForm from '../../../components/DateForm/DateForm';
import { isvalidDate } from '../../../utils/datehelper';

class ExperienceForm extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            experience: {
                company: '',
                designation: '',
                startDate: '',
                endDate: ''
            },
            nextButtonEnable: true,
            moreButtonEnable: false
        }
    }

    componentWillReceiveProps(nextProps){

        if(nextProps.experience.length > 0){
            this.setState({
                nextButtonEnable: true
            });
        }
    }

    handleDesignationChange= (e) => {
        let tempExperience = this.state.experience;
        tempExperience.designation = e.target.value;
        this.setState({
            experience: tempExperience
        }, function(){
            this.verifyField();
        });
    }

    handleCompanyChange= (e) => {
        let tempExperience = this.state.experience;
        tempExperience.company = e.target.value;
        this.setState({
            experience: tempExperience
        }, function(){
            this.verifyField();
        });
    }

    handleStartDate = (date) => {
        let tempExperience = this.state.experience;
        tempExperience.startDate = date;
        this.setState({
            experience: tempExperience
        }, function(){
            this.verifyField();
        });
    }

    handleEndDate= (date) => {
        let tempExperience = this.state.experience;
        tempExperience.endDate = date;
        this.setState({
            experience: tempExperience
        }, function(){
            this.verifyField();
        });
    }

    verifyField = () => {

        const experience = this.state.experience;

        if( experience.academicDegree !=='' && experience.college !== '' &&
            isvalidDate(experience.startDate) && isvalidDate(experience.endDate)){
            this.setState({
                nextButtonEnable: true,
                moreButtonEnable: true
            });
        }else{
            this.setState({
                nextButtonEnable: false,
                moreButtonEnable: false
            });
        }
    }

    handlePreviousClick = (e) => {
        e.preventDefault();
        // this.props.onNextStep(2);
    }

    handleAddMoreClick = (e) => {
        e.preventDefault();
        let tempExperience = this.state.experience;
        this.setState({
            experience: {
                company: '',
                designation: '',
                startDate: '',
                endDate: ''
            },
            nextButtonEnable: false,
            moreButtonEnable: false
        }, function(){
            if( tempExperience.academicDegree !=='' && tempExperience.college !== '' &&
                isvalidDate(tempExperience.startDate) && isvalidDate(tempExperience.endDate))
                this.props.onAddMoreExperience(tempExperience);
            else
                this.props.onAddMoreExperience(null);                
        });

    }
   
    handleNextClick = (e) => {
        e.preventDefault();
        
        let tempExperience = this.state.experience;

        if ( tempExperience.academicDegree !=='' && tempExperience.college !== '' &&
                isvalidDate(tempExperience.startDate) && isvalidDate(tempExperience.endDate))
            this.props.onFinishedExperienceForm(this.state.experience);
        else
            this.props.onFinishedExperienceForm(null);
    }

    render(){

        const experience = this.state.experience;

        return(
            <div id="experience-form-container" className="container">
                <h3>Experience</h3><br/>
                <form>
                    <div className="form-group">
                        <label htmlFor="company">Company:</label>
                        <input type="text" className="form-control" id="company" value={experience.designation} onChange={this.handleDesignationChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="designation">Designation:</label>
                        <input type="text" className="form-control" id="designation" value={experience.company} onChange={this.handleCompanyChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="startDate">Start Date:</label>
                        <DateForm date={experience.startDate} onChange={this.handleStartDate}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="startDate">End Date:</label>
                        <DateForm date={experience.endDate} onChange={this.handleEndDate}/>
                    </div>
                    <button type="submit" className="btn btn-secondary" onClick={this.handlePreviousClick}>PRE</button>                        
                    <button type="submit" className="btn btn-info" disabled={!this.state.moreButtonEnable} onClick={this.handleAddMoreClick}>ADD MORE</button>                        
                    <button type="submit" className="btn btn-primary pull-right" disabled={!this.state.nextButtonEnable} onClick={this.handleNextClick}>NEXT</button>
                </form>
            </div>
        )
    }
}

export default ExperienceForm;