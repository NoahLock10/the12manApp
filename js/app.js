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

const PORT = process.env.PORT || 3000;

const indexRouter = require('./routes/index');
const app = express();

// === settings ===
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/coord', (req, res) => {res.send(JSON.stringify(globalLocation))});

app.use('/', indexRouter.homepage);

const listener = app.listen(PORT, (err) => {
  if (err) {
    console.info(`Error starting the server: ${err}`);
    return;
  }
  console.info(`Listening on port ${listener.address().port}`);
});

const globalLocation = { 
  lat: null,
  lng: null,
};

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  connection.query("SELECT Longitude, Latidude FROM GPSCoordinates", function (err, result, fields) {
    if (err) throw err;
    globalLocation.lat = result[0].Latidude;
    globalLocation.lng = result[0].Longitude
    console.log(globalLocation);
  });
});
 
//export default globalLocation;
//const texas = { lat: 32.1432, lng: 93.2131};