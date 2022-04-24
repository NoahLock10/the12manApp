const express    = require("express");
const mysql      = require('mysql');
const { DOUBLE } = require("mysql/lib/protocol/constants/types");
const path       = require("path");
const { getCoords }  = require("./db");

const PORT = process.env.PORT || 3000;

const indexRouter = require('./routes/index');
const app = express();

// === settings ===
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/coord', getCoords);

app.use('/', indexRouter.homepage);

const listener = app.listen(PORT, (err) => {
  if (err) {
    console.info(`Error starting the server: ${err}`);
    return;
  }
  console.info(`Listening on port ${listener.address().port}`);
});


 
//export default globalLocation;
//const texas = { lat: 32.1432, lng: 93.2131};