import React, { Component } from 'react';
import Cookies from 'universal-cookie';

import SignUp from './SignUp/SignUp';
import EducationForm from './EducationForm/EducationForm';
import ExperienceForm from './ExperienceForm/ExperienceForm';
import OthersForm from './OthersForm/OthersForm';
import CertificationForm from './CertificationForm/CertificationForm';
import { TSThisType } from 'babel-types';
require('./registration.css');

const cookies = new Cookies();

class Registration extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
           step: 1,
           education : [],
           experience: [],
           certifications: [],

        }
    }

    componentWillMount(){
        if(cookies.get('htToken') !== undefined ){
            this.handleNextStep(2);
        }
    }

    componentWillReceiveProps(nextProps){
        if( nextProps.userInfo.data !== null && nextProps.userInfo.error === null ){
            this.props.history.push('/');
        }
    }

    handleNextStep = (step) => {
        this.setState({ step: step});
    }

    hanleAddMoreEducation = (education) => {

        let tempEducation = this.state.education;
        tempEducation.push(education);

        this.setState({
            education: tempEducation
        });
    }

    handleFinishedEducationForm = (education) => {

        if (education !== null){
            let tempEducation = this.state.education;
            tempEducation.push(education);
    
            this.setState({
                education: tempEducation
            });
        }

        this.handleNextStep(3);
    }

    handleFinishedExperienceForm = (experience) => {

        if (experience !== null){
            let tempExperience = this.state.experience;
            tempExperience.push(experience);
    
            this.setState({
                experience: tempExperience
            });
        }

        this.handleNextStep(4);
    }

    handleAddMoreExperience = (experience) => {

        let tempExperience = this.state.experience;
        tempExperience.push(experience);

        this.setState({
            education: tempExperience
        });
    }

    handleFinishedCertificationForm = (certifications) => {
        
        let tempcertifications = this.state.certifications;

        if( certifications !== null ){
            tempcertifications.push(certifications);
        }

        let userInfo = {
            education: this.state.education,
            experience: this.state.experience,
            certifications: tempcertifications
        }

        if(cookies.get('htToken') !== undefined ){
            this.props.saveUserInfo(userInfo, cookies.get('htToken'));
        }

    }

    handleAddMoreCertifications = (certifications) => {

        if (certifications !== null){
            let tempCertifications = this.state.certifications;
            tempCertifications.push(certifications);
    
            this.setState({
                certifications: tempCertifications
            });
        }

    }
    
    render(){
        
        switch (this.state.step) {
            case 1:
                return <SignUp {...this.props} onNextStep={this.handleNextStep}/>
            case 2:
                return <EducationForm {...this.props} 
                        education={this.state.education} 
                        onNextStep={this.handleNextStep}
                        onAddMoreEducation={this.hanleAddMoreEducation}
                        onFinishedEducationForm={this.handleFinishedEducationForm}/>
            case 3:
                return <ExperienceForm {...this.props} 
                        experience={this.state.experience}
                        onNextStep={this.handleNextStep}
                        onAddMoreExperience={this.handleAddMoreExperience}
                        onFinishedExperienceForm={this.handleFinishedExperienceForm}/>
            case 4:
                return <CertificationForm {...this.props} 
                        onNextStep={this.handleNextStep}
                        onAddMoreCertifications={this.handleAddMoreCertifications}
                        onFinishedCertificationForm={this.handleFinishedCertificationForm}/>
            default:
                return <SignUp {...this.props} onNextStep={this.handleNextStep}/>            
        }
    }
}

export default Registration;