var React = require('react');

var Architecture = React.createClass({
  render: function() {
    return (
      <section className='doc-block'>
        <h2>Sassy Sass Architecture</h2>
        <ol>
          <li>Utils</li>
          <ul>
            <li>The utils directory contains Sass partials like:</li>
            <ul>
              <li>* Vendor dependancies (Compass, Foundation)</li>
              <li>* Authored dependancies (Mixins, Extends)</li>
            </ul>
          </ul>
          <li>Base</li>
          <ul>
            <li>The base directory contains Sass partials like:</li>
            <ul>
              <li>* Variables</li>
              <li>* Fonts</li>
              <li>* Reset</li>
            </ul>
          </ul>
          <li>Layout</li>
          <ul>
            <li>The layout directory contains Sass partials like:</li>
            <ul>
              <li>* Responsive Grid</li>
              <li>* Page specific layouts</li>
            </ul>
          </ul>
          <li>Modules</li>
          <ul>
            <li>The modules directory contains Sass partials like:</li>
            <ul>
              <li>* Header</li>
              <li>* Footer</li>
              <li>* Navigation</li>
              <li>* Content Block</li>
            </ul>
          </ul>
          <li>Themes</li>
          <ul>
            <li>The themes directory contains Sass partials that overwrite the styles in layout or modules.</li>
          </ul>
        </ol>
      </section>
    );
  }
});

module.exports = Architecture;