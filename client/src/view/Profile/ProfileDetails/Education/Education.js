import React from 'react';

const Education = (props) => {

    const educations = props.userInfo.data.education;

    let educationInfoList = [];

    if(educations !== null && educations.length > 0){
        
        educationInfoList = educations.map( (education, key) => {

            var educationInfoRow = 
                <div key={key}>
                    <div className="row">
                        <div className="col-md-4">
                            Academic Degree
                        </div>
                        <div className="col-md-8">
                            {education.academicDegree}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            College
                        </div>
                        <div className="col-md-8">
                            {education.college}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            Start Date
                        </div>
                        <div className="col-md-8">
                            {education.startDate}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            End Date
                        </div>
                        <div className="col-md-8">
                            {education.endDate}
                        </div>
                    </div>
                    <hr/>
                </div>
            
            return educationInfoRow;
        })
    }

    return (
        <div>
            {educationInfoList}
        </div>
    )
};

export default Education;