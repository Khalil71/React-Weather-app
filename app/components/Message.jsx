var React = require('react');

var Message = ({temp, location}) => {
    return (
        <p className="text-center">Weather in {location} is {temp}</p>
    );
};

module.exports = Message;
