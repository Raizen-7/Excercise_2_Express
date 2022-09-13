const express = require('express');
const dotenv = require('dotenv');
const { app } = require('./app');

//Util
const { db } = require('./utils/database.util');

//Enable Express app to recive JSON data
app.use(express.json());

dotenv.config({ path: './.env' })

const startServer = async ()=>{
    try{
        await db.authenticate();
        await db.sync();

        //port server to listen
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, ()=> {
            console.log('Server on Express App!');
        })
    } catch(error){
        console.log(error);
    }
};

startServer();