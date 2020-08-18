var express = require('express')
var { graphqlHTTP } = require('express-graphql')
var { buildSchema } = require('graphql')
var app = express()

// construct schema with graphql schema lang
var testSchema = buildSchema(`
  type Query {
    hello: String
  }
`)

// root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello World!'
  },
}

// set up server.js listen
app.use('/graphql', graphqlHTTP({
  schema: testSchema,
  rootValue: root,
  graphiql: true,
}))
app.listen(3000)
console.log('KABLOWIE LISTENING ON PORT 3000, test-point at http://localhost:3000/graphql')