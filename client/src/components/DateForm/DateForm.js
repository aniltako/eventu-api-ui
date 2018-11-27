import React, { Component } from 'react'
require('./dateForm.css');

class DateForm extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
           year: '',
           month: '',
           day: ''
        }
    }

    componentWillMount(){

        console.log(this.props, "MOUNT");

        let date = this.props.date;
        if(date !== ''){
            var splittableDate = date.split('/');
            this.setState({
                year: splittableDate[0],
                month: splittableDate[1],
                day: splittableDate[2]
            })
        }else{
            this.setState({
                year: '',
                month: '',
                day: ''
            });
        }
    }

    componentWillReceiveProps(nextProps){

        console.log(nextProps.date, "WILL");
        if(nextProps.date === '' || nextProps.date === "undefined"){
            this.setState({
                year: '',
                month: '',
                day: ''
            });
        }else{
            var splittableDate = nextProps.date.split('/');
            this.setState({
                year: splittableDate[0],
                month: splittableDate[1],
                day: splittableDate[2]
            })
        }
    }

    onChangeYear = (e) => {
        this.setState({
            year : e.target.value
        }, function(){
            this.handleDateChange();
        });

    }
    
    onChangeMonth= (e) => {
        this.setState({
            month : e.target.value
        }, function(){
            this.handleDateChange();
        });
        
    }

    onChangeDay = (e) => {
        this.setState({
            day : e.target.value
        }, function(){
            this.handleDateChange();        
        });
    }

    handleDateChange = () => {

        if(this.state.year.trim() === ''){

        }
        if(this.state.year.trim() === ''){
            
        }
        if(this.state.year.trim() === ''){
            
        }

        this.props.onChange(this.state.year+'/'+this.state.month+'/'+this.state.day);
    }

    render(){

        let years = [];

        for(let i = 1980; i< 2011; i++ ){
            years.push(<option key={i} value={i}>{i}</option>);
        }

        const monthsArray = ["Jan", "Feb", "Mar", "Apr","May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

        let months = [];

        for(let j = 0; j < monthsArray.length; j++ ){
            months.push(<option key={j} value={monthsArray[j]}>{monthsArray[j]}</option>);
        }

        let days = [];

        let totalDays = 30;


        if(['Jan', 'Mar', 'May', 'Jul', 'Aug', 'Oct', 'Dec'].includes(this.state.month)){
            totalDays = 31;
        }else if(this.state.month === 'Feb'){
            totalDays = 28;
        }


        for(let k = 1; k <= totalDays; k++ ){
            days.push(<option key={k} value={k}>{k}</option>);
        }

        return(
            <div className="row">
                <div className="col-sm-4">
                    <label htmlFor="year">Year:</label>
                    <select className="form-control" id="year" value={this.state.year} onChange={this.onChangeYear}>
                        <option key="empty"></option>
                        {years}
                    </select>
                </div>
                <div className="col-sm-4">
                    <label htmlFor="year">Month:</label>
                    <select className="form-control" id="year" value={this.state.month} onChange={this.onChangeMonth}>
                        <option key="empty"></option>
                        {months}
                    </select>
                </div>
                <div className="col-sm-4">
                <label htmlFor="year">Day:</label>
                    <select className="form-control" id="year" value={this.state.day} onChange={this.onChangeDay}>
                        <option key="empty"></option>
                        {days}
                    </select>
                </div>
            </div>
        )
    }
}

export default DateForm;