import React from 'react';
import ClassWeatherApp from './ClassWeatherApp';
import FunctionalWeatherApp from './FunctionalWeatherApp';
import './App.css';

class App extends React.Component {
  state={weather:"crappy"};
  toggleWeather = () => {
    this.setState(state => ({...state, weather: state.weather === 'crappy' ? 'nice' : 'crappy'}));
  };

  render() {
    return (
      <div className="App">
        <ClassWeatherApp name="Bubbb" weather="crappy"/>
        <FunctionalWeatherApp name="Bubbb" weather="crappy" toggleWeather={this.toggleWeather}/>
      </div>
    );
  }
}

export default App;
