const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
const cors = require('cors')
const server = express()


server.use(cors())
//para Express entender json
server.use(express.json())

mongoose.connect('mongodb+srv://tinder:tinder@cluster0-lmape.mongodb.net/test?retryWrites=true&w=majority', 
{useNewUrlParser:true, useUnifiedTopology: true })

//Server usando routes
server.use(routes)




server.listen(3333, () => console.log('Running on 3333'))