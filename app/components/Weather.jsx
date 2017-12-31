var React = require('react');
var WeatherForm = require('WeatherForm');
var Message = require('Message');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading : false
    }
  },
  handleSearch: function (location) {

    this.setState({isLoading: true});
    openWeatherMap.getTemp(location)
    .then( (temp) => {
      this.setState({
        location,
        temp,
        isLoading: false
      });
    }, (errorMessage) => {
      this.setState({
        isLoading: false
      });
      alert(errorMessage);
    })
  },
  render: function() {
    var {isLoading, temp, location} = this.state;

    function renderMessage () {
      if(isLoading){
        return <h3>Fetching Weather...</h3>;
      }else if(temp && location){
        return <Message location={location} temp={temp}/>;
      }
    }

    return (
      <div>
        <h3>Weather Componenet</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
