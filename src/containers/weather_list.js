
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart'
import GoogleMap from '../components/google_map';

//export class for componenets and containers
class WeatherList extends Component {

  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp );
    const pressures = cityData.list.map(weather => weather.main.pressure );
    const humidities = cityData.list.map(weather => weather.main.humidity );
    //grabs the same named variable form the api data, and creates a variable
    //with the same name
    const {lon, lat} = cityData.city.coord;

    return(
      <tr key={name}>
        <td>
           <GoogleMap lon={lon} lat={lat}/>
        </td>
        <td><Chart data={temps} color="orange" unit="K" /></td>
        <td><Chart data={pressures} color="green" unit="hPa" /></td>
        <td><Chart data={humidities} color="red" unit="%"/></td>
      </tr>
    );
  }

  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidty (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );

  }
}

function mapStateToProps({weather}){ // state
  //from weather reducer
  return { weather }; //== {weather: weather}
}

export default connect (mapStateToProps)(WeatherList);
