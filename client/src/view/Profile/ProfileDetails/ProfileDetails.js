import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import './profiledetails.css';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import Certification from './Certification/Certification';

const cookies = new Cookies();

class ProfileDetails extends Component {
    
    constructor(props) {
        super(props);

        this.state ={
            collapseOne: "collapse in",
            collapseTwo: "collapse",
            collapseThree: "collapse"
        }


    }

    componentWillMount(){

        console.log(this.props, "PROPS");

        if(cookies.get('htToken') === undefined ){
            this.props.history.push('/login');
        }

        if(this.props.userInfo.data === null){
            this.props.getUserInfo(cookies.get('htToken'));
        }
    }

    handleCollapseOne = () => {
        
        var collapseOne = 'collapse';

        if(this.state.collapseOne === 'collapse')
            collapseOne = 'collapse in';

        this.setState({
            collapseOne: collapseOne
        })        
    }

    handleCollapseTwo = () => {

        var collapseTwo = 'collapse'

        if(this.state.collapseTwo === 'collapse')
            collapseTwo = 'collapse in'
        
        this.setState({
            collapseTwo: collapseTwo
        })
    }

    handleCollapseThree = () => {

        var collapseThree = 'collapse'

        if(this.state.collapseThree === 'collapse')
            collapseThree = 'collpase in'

        this.setState({
            collapseThree: collapseThree
        })
    }

    render(){

        console.log(this.props.userInfo.data, "DATA");

        console.log(this.state.collapseOne);

        return(
            <div>
                <div className="card">
                    <div className="card-header" id="headingOne" onClick={this.handleCollapseOne}>
                        <h5 className="mb-0">
                            Education
                        </h5>
                    </div>

                    <div id="collapseOne" className={this.state.collapseOne}>
                        <div className="card-body">
                            { 
                                this.props.userInfo.data !== null ?
                                <Education {...this.props} />
                                :''
                            }
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingTwo" onClick={this.handleCollapseTwo}>
                        <h5 className="mb-0">
                            Experience
                        </h5>
                    </div>
                    <div id="collapseTwo" className={this.state.collapseTwo}>
                        <div className="card-body">
                            { 
                                this.props.userInfo.data !== null ?
                                <Experience {...this.props} />
                                :''
                            }
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingThree" onClick={this.handleCollapseThree}>
                        <h5 className="mb-0">
                            Certifications
                        </h5>
                    </div>
                    <div id="collapseThree" className={this.state.collapseThree}>
                        <div className="card-body">
                            { 
                                this.props.userInfo.data !== null ?
                                <Certification {...this.props} />
                                :''
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileDetails;