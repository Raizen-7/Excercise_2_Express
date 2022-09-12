const express = require('express');
const dotenv = require('dotenv');
const { app } = require('./app');

//Util
const { db } = require('./utils/database.util');

dotenv.config({ path: './.env' });

//Enable Express app to recive JSON
app.use(express.json());

const startServer = async ()=>{
    try{
        await db.authenticate();
        await db.sync();

        //port server to listen
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, ()=> {
            console.log(`Server on and connected to db with authenticated! on: ${PORT}`);
        })
    } catch(error){
        console.log(error);
    }
};

startServer();