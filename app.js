var express = require('express');
var reactViews = require('express-react-views');
var path = require('path');

var app = express();

app.set('view engine', 'js');
app.engine('js', reactViews.createEngine());
app.use(express.static(path.resolve(__dirname + '/public')));

app.get('/', require('./routes').index);

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Sassy Sass listening on port ' + port);
});
