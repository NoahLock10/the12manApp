const express    = require("express");
const mysql      = require('mysql');
const { DOUBLE } = require("mysql/lib/protocol/constants/types");
const path       = require("path");
const connection = mysql.createConnection({
  host     : 'mysql-the12mandb.crceajnljqt4.us-east-2.rds.amazonaws.com',
  port     : '3306',
  user     : 'admin',
  password : 'Team12najj!',
  database : 'the12thman'
});

const PORT = 3000;

const indexRouter = require('./routes/index');
const app = express();

// === settings ===
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter.homepage);

const listener = app.listen(PORT, (err) => {
  if (err) {
    console.info(`Error starting the server: ${err}`);
    return;
  }
  console.info(`Listening on port ${listener.address().port}`);
});

/*
var long =  30.6187;
var latit = -96.3365;

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  connection.query("SELECT Longitude FROM GPSCoordinates", function (err, result, fields) {
    if (err) throw err;
    long = result[0].Longitude;
    console.log(long);
  });
  connection.query("SELECT Latidude FROM GPSCoordinates", function (err, result, fields) {
    if (err) throw err;
    latit = result[0].Latidude;
    console.log(latit);
  });
});

var work= latit;
*/
