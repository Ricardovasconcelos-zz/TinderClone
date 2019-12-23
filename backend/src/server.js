const express = require('express')
const routes = require('./routes')
const mongoose = require('./database')
const cors = require('cors')
const server = express()

server.use(cors())
server.use(express.json())
server.use(routes)

server.listen(3333, () => console.log('Running on 3333'))