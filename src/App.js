import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';


const API_KEY = '2224ff2c958e0fb490213afdb322841e';

class App extends React.Component {

  getWeather = async (e) => {
    e.preventDefault();
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
  }


  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather />
      </div>
    );
  }
}

export default App;
