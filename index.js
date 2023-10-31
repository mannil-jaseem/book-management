const express = require('express')
const app = express()
require('dotenv').config()
const routes = require('./routes')
require('./database')
require('./models')

app.use(express.json());
app.use('/book-management',routes)

let port = process.env.PORT


app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})