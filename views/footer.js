var React = require('react');
var year = require('year');

var Footer = React.createClass({
  render: function() {
    return (
      <footer>
        <div className='row'>
          <div className='left'>
            <iframe src='https://ghbtns.com/github-btn.html?user=ryanburgess&repo=sassysass&type=star&count=true'
                frameBorder='0' scrolling='0' width='100px' height='20px'></iframe>
          </div>

          <div className='right'>
            MIT &copy; {year('yyyy')}
          </div>
        </div>
      </footer>
    );
  }
});

module.exports = Footer;
