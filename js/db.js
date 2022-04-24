const express    = require("express");
const mysql      = require('mysql');
const { DOUBLE } = require("mysql/lib/protocol/constants/types");
const path       = require("path");
const util = require('util');

const connection = mysql.createConnection({
  host     : 'mysql-the12mandb.crceajnljqt4.us-east-2.rds.amazonaws.com',
  port     : '3306',
  user     : 'admin',
  password : 'Team12najj!',
  database : 'the12thman'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

const query = util.promisify(connection.query).bind(connection);

const initDb = () =>{
  connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
}

exports.getCoords = async (req, res) => {
  const globalLocation = { 
    lat: null,
    lng: null,
  };
  const result = await query("SELECT Latidude,Longitude FROM GPSCoordinates LIMIT 1");
  console.log(result);
  globalLocation.lat = result[0].Latidude;
  globalLocation.lng = result[0].Longitude;
  console.log(globalLocation);
  await res.json(globalLocation);
}

