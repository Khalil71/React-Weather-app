var React = require('react');

var About = () => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is my first React app so don't judge or do, I couldn't care less</p>
      <ul>
        <li>
          <a href="https://github.com/Khalil71/React-Weather-app">GitHub Repo</a>
        </li>
        <li>
          <a href="https://twitter.com/Khalil911">Twitter page</a>
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
