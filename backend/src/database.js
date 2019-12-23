const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb+srv://tinclone:tinclone@cluster0-vti8v.mongodb.net/test', 
{useNewUrlParser:true, useUnifiedTopology: true })