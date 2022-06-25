const Sequelize = require('sequelize');
require('dotenv').config();
const mysql = require('mysql2');

// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     host: 'localhost',
//     dialect: 'mysql',
//     port: 3306
//   }
// );

const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // {TODO: Add your MySQL password}
    password: process.env.DB_PASSWORD,
    database: 'employee_tracker'
  },
  console.log(`Connected to the employee_tracker database.`)
);

module.exports = db;