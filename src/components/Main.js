import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

//import the action
import {fetchAPIResponse} from "../actions/fetchAPIdata";

class Main extends Component {
  constructor(){
    super();
    this.state = {
      value: ""
    }
  }
 
  //call the action
  componentWillMount= () =>{
    this.props.FetchAPIResponse("Espoo");
  }

  //search for the city
  search = () =>{
    this.props.FetchAPIResponse(this.state.value);
  }

  changeHandler = (e) =>{
   //get the value from the input
    let value= e.target.value;
   //store the value in the state property
    this.setState({
      value : value
    });
    
  }

  render() {
    return (
      <div>
        <div className="form">
            <input name="city" placeholder="Espoo" onChange ={this.changeHandler} />
            <button onClick={this.search}> <i className="fas fa-search"></i> </button>
        </div>

            <h2><i class="fas fa-chart-line"></i> DASHBOARD </h2> 

            <h2><i class="fas fa-globe-africa"></i> Location </h2> 
        
            <div className="data-container">
                <div className="square">
                    <p>City</p>
                    <p className="data">{this.props.apiLocation[0]}</p>
                </div>
                <div className="square">
                    <p>Country</p>
                    <p className="data">{this.props.apiLocation[2]}</p>
                </div>
                <div className="square">
                    <p>Time Zone Id</p>
                    <p className="data">{this.props.apiLocation[5]}</p>
                </div>
                <div className="square">
                    <p>Local Time</p>
                    <p className="data">{this.props.apiLocation[7]}</p>
                </div>
            </div>

            <h2><i className="fas fa-tint"></i> Current Conditions</h2>   

            <div className="data-container">
              <div className="square">
                <p>Condition</p>
                <p className="data">{this.props.apiConditions[0]}</p>
              </div>
              <div className="square">
                <img src={this.props.apiConditions[1]} alt="current weather condition icon" />
              </div>
            </div> 

            <h2><i className="fas fa-thermometer-quarter"></i> Other Conditions </h2>   
           
            <div className="data-container">
                <div className="square">
                    <p>Clouds</p>
                    <p className="data">{this.props.apiResponse[14]} %</p>
                </div>
                <div className="square">
                    <p>Feels like (Celcius)</p>
                    <p className="data">{this.props.apiResponse[15]} °C</p>
                </div>
                <div className="square">
                    <p>Feels like (Fahrenheit)</p>
                    <p className="data">{this.props.apiResponse[16]} °F</p>
                </div>
                <div className="square">
                    <p>Humidity</p>
                    <p className="data">{this.props.apiResponse[13]} %</p>
                </div>
            </div> 
        </div>
    );
  }
}

function mapStateToProps(state){
  return{
    apiResponse: state.FetchWeatherReducer.weatherData,
    apiLocation : state.FetchWeatherLocation.location,
    apiConditions: state.FetchCurrentConditions.conditions
  }
}

function matchDispatchToProps(dispatch){
  //bind the action to be executed
  return bindActionCreators({FetchAPIResponse:fetchAPIResponse}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Main);