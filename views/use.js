var React = require('react');

var Use = React.createClass({
  render: function() {
    return (
      <section className='doc-block'>
        <h2>Use</h2>
        <p>Run <span className='code'>sassysass install</span> in your project directory to create your Sass structure.</p>
        <p>To create new individual Sass files run <span className='code'>sassysass page</span>. If the name isn't set the file will be named 'page' and if the path isn't set it assumes the directory is 'sass'.</p>
        <p>To create new Sass module run <span className='code'>sassysass module</span>. If the name isn't set the file will be named 'module' and if the path isn't set it assumes the directory is 'sass/modules'.</p>
      </section>
    );
  }
});

module.exports = Use;