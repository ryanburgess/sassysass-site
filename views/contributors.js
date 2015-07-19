var React = require('react');

var Contributors = React.createClass({
  render: function() {
    var contributors = this.props.contributors;
    return (
      <section className='doc-block'>
        <h2>Contributors</h2>
        <ul className='contributors'>
          {contributors.map(function(contributors, i) {
            var avatar = 'https://avatars0.githubusercontent.com/u/' + contributors.avatar + '?v=3&s=150';
            var profileAlt = contributors.name + ' profile image';
            var twitterUrl = 'https://twitter.com/' + contributors.twitter;
            return (
              <li>
                <a href={contributors.url}><img src={avatar} alt={profileAlt} /></a>
                <h3>{contributors.name}</h3>
                <div><a href={twitterUrl}>@{contributors.twitter}</a></div>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
});

module.exports = Contributors;