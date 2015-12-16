var React = require('react');

var Header = React.createClass({
  render: function() {
    return (
      <header className='heading'>
        <div className='row'>
          <img className='sassysass-logo' src={this.props.logo} alt={this.props.title} />
          <div className='banner-copy'>
            <h2>{this.props.tagline}</h2>
            <div className='github-button'>
              <a href={this.props.github}><iframe src='https://ghbtns.com/github-btn.html?user=ryanburgess&repo=sassysass&type=star&count=true&size=large'
                  frameBorder='0' scrolling='0' width='100%' height='30px'></iframe></a>
            </div>
          </div>
        </div>
      </header>
    );
  }
});

module.exports = Header;
