// configure database with server
// used for running queries

const Pool = require('pg').Pool;
// import pg library
// initailize Pool

// configure it for where
// and how to connect to the database

const pool = new Pool({
  user: 'postgres',
  password: '##########',
  host: 'localhost',
  database: 'pernstack',
  port: 5432 // default port for postgres
});

module.exports = pool;

// exports pool as a module to be imported by index.js in 
// this case and used in the database routes
