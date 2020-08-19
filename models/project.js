const mongoose = require('mongoose')
const Schema = mongoose.Schema

const projectSchema = new Schema({
  name: String,
  description: String,
  technology: [String],
  comment: String,
  lead: String,
  contributor: [String]
})

module.exports = mongoose.model('Project', projectSchema)