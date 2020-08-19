const mongoose = require('mongoose')
const Schema = mongoose.Schema

const projectSchema = new Schema({
  name: String,
  description: String,
  technology: Array[String],
  comment: String,
  lead: String,
  contributor: Array[String]
})

module.exports = mongoose.model('Project', projectSchema)