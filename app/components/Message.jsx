var React = require('react');

var Message = ({temp, location}) => {
    return (
        <p>Weather in {location} is {temp}</p>
    );
};

module.exports = Message;
