import React from 'react';

const Certification = (props) => {

    const certifications = props.userInfo.data.certifications;

    let certificationInfoList = [];

    if(certifications !== null && certifications.length > 0){
        
        certificationInfoList = certifications.map( (certification, key) => {

            var certificationInfoRow = 
                <div key={key}>
                    <div className="row">
                        <div className="col-md-4">
                            Title
                        </div>
                        <div className="col-md-8">
                            {certification.title}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            Source Link
                        </div>
                        <div className="col-md-8">
                            {certification.sourceLink}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            Start Date
                        </div>
                        <div className="col-md-8">
                            {certification.startDate}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            End Date
                        </div>
                        <div className="col-md-8">
                            {certification.endDate}
                        </div>
                    </div>
                    <hr/>
                </div>
            
            return certificationInfoRow;
        })
    }

    return (
        <div>
            {certificationInfoList}
        </div>
    )
};

export default Certification;