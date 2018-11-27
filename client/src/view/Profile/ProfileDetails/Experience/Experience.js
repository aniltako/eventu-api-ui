import React from 'react';

const Experience = (props) => {

    const experiences = props.userInfo.data.experience;

    let experienceInfoList = [];

    if(experiences !== null && experiences.length > 0){
        
        experienceInfoList = experiences.map( (experience, key) => {

            var experienceInfoRow = 
                <div key={key}>
                    <div className="row">
                        <div className="col-md-4">
                            Company
                        </div>
                        <div className="col-md-8">
                            {experience.company}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            Designation
                        </div>
                        <div className="col-md-8">
                            {experience.designation}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            Start Date
                        </div>
                        <div className="col-md-8">
                            {experience.startDate}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            End Date
                        </div>
                        <div className="col-md-8">
                            {experience.endDate}
                        </div>
                    </div>
                    <hr/>
                </div>
            
            return experienceInfoRow;
        })
    }

    return (
        <div>
            {experienceInfoList}
        </div>
    )
};

export default Experience;