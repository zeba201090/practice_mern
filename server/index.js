const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const db_conn = require('./db_config')
const todoItemsRoute = require('./routes/todoItems');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use(express.json());

db_conn;


app.listen( 4000 ,()=>{
    console.log('Server is running on port 4000')
});


app.use('/', todoItemsRoute);



