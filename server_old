var { graphql, buildSchema } = require('graphql')

//construct a schema with graphql schema lang
var helloSchema = buildSchema(`
  type Query {
    hello: String
  }
`)

//root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!'
  },
}

// run graphql query '{ hello }' and print res
graphql(helloSchema, '{ hello }', root)
.then((res) => {
  console.log(JSON.stringify(res))
})