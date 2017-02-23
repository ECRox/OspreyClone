var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var massive = require('massive');
var config = require('./config.js');
var app = module.exports = express();

//MASSIVE//
var connectionString = config.MASSIVE_URI;
var db = massive.connectSync({
  connectionString: connectionString
});
app.set('db', db);
var db = app.get('db');


app.use(bodyParser.json());
app.use(express.static(__dirname + './../dist'));
app.use(cors());

var mainCtrl = require('./mainCtrl')

//==============================================================================//
//                          User Endpoints                                      //
//==============================================================================//
//eg app.get('/api/getProduct/:id', productCtrl.getProduct);

app.get('/getAllImages', mainCtrl.getImages);


var port = 3000;
app.listen(port, function() {
    console.log('nailed it on port ' + port);
})
