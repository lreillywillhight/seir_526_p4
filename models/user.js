const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: String,
  email: String,
  stack: Array[String],
  project: Array[String]
})

module.exports = mongoose.model('User', userSchema)