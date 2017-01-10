var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var massive = require('massive');
var config = require('./config.js');
var app = module.exports = express();


var connectionString = config.MASSIVE_URI;
var db = massive.connectSync({
  connectionString: connectionString
});
app.set('db', db);
var db = app.get('db');
app.use(bodyParser.json());
app.use(express.static(__dirname + './../dist'));
app.use(cors());

//==============================================================================//
//                          User Endpoints                                      //
//==============================================================================//
//eg app.get('/api/getProduct/:id', productCtrl.getProduct);



var port = 3000;
app.listen(port, function() {
    console.log('nailed it on port ' + port);
})
