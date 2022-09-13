const { Sequelize, DataTypes } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

//Data base connection
const db = new Sequelize({
    dialect: 'postgres',
    host: process.env.DB_HOTS,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB,
    logging: false,
});

module.exports = { db, DataTypes };