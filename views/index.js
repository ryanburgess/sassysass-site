var React = require('react');
var Header = require('./header');
var Footer = require('./footer');
var Install = require('./install');
var Use = require('./use');
var Contributors = require('./contributors');
var Architecture = require('./architecture');
var DefaultLayout = require('./default');

var layout = React.createClass({
  render: function() {
    return (
      <DefaultLayout title={this.props.title} description={this.props.description}>
        <Header tagline={this.props.tagline} logo={this.props.logo} title={this.props.title} github={this.props.github}>
        </Header>
        <div className='main-content'>
          <Install>
          </Install>
          <Use>
          </Use>
          <Architecture>
          </Architecture>
          <Contributors contributors={this.props.contributors}>
          </Contributors>
        </div>
        <Footer>
        </Footer>
      </DefaultLayout>
    );
  }
});

module.exports = layout;