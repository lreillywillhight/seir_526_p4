require('dotenv').config()
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')

const app = express()




app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.once('open', () => {
  console.log('connected to mongodb Atlas')
})


app.listen(process.env.PORT || 3000, () => {
  console.log(`server.js listening on port ${process.env.PORT}`)
})