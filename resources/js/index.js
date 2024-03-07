const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'vsamace.ctogsgmecbhr.us-east-2.rds.amazonaws.com',
  user: 'admin',
  password: 'vsamAce2024!',
  database: 'vsamace',
  port: 3306
});

// Start connection
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the AWS RDS MySQL database.');
});

// End connection when finished
connection.end((err) => {
  if (err) {
    console.error('Error ending the connection:', err);
  } else {
    console.log('Connection ended gracefully.');
  }
});