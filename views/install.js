var React = require('react');

var Install = React.createClass({
  render: function() {
    return (
      <div className='doc-block'>
        <h2>Install</h2>
        <div className='code-block'>npm install sassysass -g</div>
        <p>Sassy Sass requires <a href='https://nodejs.org/'>Node and NPM</a>.</p>
      </div>
    );
  }
});

module.exports = Install;