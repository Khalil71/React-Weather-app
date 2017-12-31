var React = require('react');
var WeatherForm = require('WeatherForm');
var Message = require('Message');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading : false
    }
  },
  handleSearch: function (location) {

    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

    openWeatherMap.getTemp(location)
    .then( (temp) => {
      this.setState({
        location,
        temp,
        isLoading: false
      });
    }, (e) => {
      this.setState({
        isLoading: false,
        errorMessage: e.message
      });
      alert(errorMessage);
    })
  },
  render: function() {
    var {isLoading, temp, location, errorMessage} = this.state;

    function renderMessage () {
      if(isLoading){
        return <h3 className="textCenter">Fetching Weather...</h3>;
      }else if(temp && location){
        return <Message location={location} temp={temp}/>;
      }
    }

    function renderError () {
      if(typeof errorMessage === 'string'){
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
