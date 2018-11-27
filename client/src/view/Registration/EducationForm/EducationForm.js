import React, { Component } from 'react';
import DateForm from '../../../components/DateForm/DateForm';
import { isvalidDate } from '../../../utils/datehelper';

class EducationForm extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            education: {
                academicDegree: '',
                college: '',
                startDate: '',
                endDate: ''
            },
            preBtnClass: 'btn btn-default hidden',
            preButtonEnable: false,
            nextButtonEnable: false,
            moreButtonEnable: false,
            currentEducationIndex: 0
        }
    }

    componentWillReceiveProps(nextProps){

        if(nextProps.education.length > 0){
            this.setState({
                nextButtonEnable: false,
                preBtnClass: 'btn btn-default',
                preButtonEnable: true
            });
        }
    }

    handleAcademicDegreeChange= (e) => {
        let tempEducation = this.state.education;
        tempEducation.academicDegree = e.target.value;
        this.setState({
            education: tempEducation
        }, () => this.verifyField())
    }

    handleCollegeChange= (e) => {
        let tempEducation = this.state.education;
        tempEducation.college = e.target.value;
        this.setState({
            education: tempEducation
        }, () => this.verifyField())
    }

    handleStartDate = (date) => {
        let tempEducation = this.state.education;
        tempEducation.startDate = date;
        this.setState({
            education: tempEducation
        }, () => this.verifyField())
    }

    handleEndDate = (date) => {
        let tempEducation = this.state.education;
        tempEducation.endDate = date;
        this.setState({
            education: tempEducation
        }, () => this.verifyField());
    }

    verifyField = () => {

        const education = this.state.education;

        if( education.academicDegree !=='' && education.college !== '' &&
            isvalidDate(education.startDate) && isvalidDate(education.endDate)){
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

    handlePreClick = (e) => {
        e.preventDefault();

        var educations = this.props.education;

        var education = educations[this.state.currentEducationIndex];

        this.setState({
            education: education
        })

    }

    handleAddMore = (e) => {
        e.preventDefault();
        let tempEducation = this.state.education;
        this.setState({
            education: {
                academicDegree: '',
                college: '',
                startDate: '',
                endDate: ''
            },
            nextButtonEnable: true,
            moreButtonEnable: true,
            preBtnClass: 'btn btn-default',
            preButtonEnable: true,
            currentEducationIndex: this.state.currentEducationIndex + 1
        }, function(){

            if( tempEducation.academicDegree !=='' && tempEducation.college !== '' &&
                isvalidDate(tempEducation.startDate) && isvalidDate(tempEducation.endDate))
                this.props.onAddMoreEducation(tempEducation);
            else
                this.props.onAddMoreEducation(null);
        });

    }

    handleNextClick = (e) => {
        e.preventDefault();
        this.props.onFinishedEducationForm(this.state.education);
    }

    render(){

        let education = this.state.education;

        console.log(education.startDate, education.endDate)

        return(
            <div id="education-form-container" className="container">
                <h3>Education</h3><br/>
                <form>
                    <div className="form-group">
                        <label htmlFor="academicDegree">Academic Degree:</label>
                        <input type="academicDegree" className="form-control" id="academicDegree" value={education.academicDegree} onChange={this.handleAcademicDegreeChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="college">College/University:</label>
                        <input type="college" className="form-control" id="college"value={education.college} onChange={this.handleCollegeChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="startDate">Start Date:</label>
                        <DateForm date={education.startDate} onChange={this.handleStartDate}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="startDate">End Date:</label>
                        <DateForm date={education.endDate} onChange={this.handleEndDate}/>
                    </div>
                    <button className={this.state.preBtnClass}  disabled={!this.state.preButtonEnable} onClick={this.handlePreClick}>PRE</button>                        
                    <button className="btn btn-info" disabled={!this.state.moreButtonEnable} onClick={this.handleAddMore}>ADD MORE</button>                        
                    <button className="btn btn-primary pull-right" disabled={!this.state.nextButtonEnable} onClick={this.handleNextClick}>NEXT</button>
                </form>
            </div>
        )
    }
}

export default EducationForm;