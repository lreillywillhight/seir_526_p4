const graphql = require('graphql')
const User = require('../models/user')
const Project = require('../models/project')

const { 
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLID, 
  GraphQLInt, 
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
 } = graphql

const ProjectType = new GraphQLObjectType ({
  name: 'Project',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    technology: { type: GraphQLList(GraphQLString) },
    comment: { type: GraphQLString },
    lead: { type: GraphQLString },
    contributor: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return User.findById(parent.userID)
      }
    }
  })
})

const UserType = new GraphQLObjectType({
  name: 'User',
    fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    stack: { type: GraphQLList(GraphQLString)},
    project: {
      type: new GraphQLList(ProjectType),
      resolve(parent, args) {
        return Project.find({ userID: parent.id })
      }
    }
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return User.findById(args.id)
      }
    },
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return User.find({})
      }
    },
    project: {
      type: ProjectType,
      args: { name: { type: GraphQLString } },
      resolve(parent, args) {
        return Project.findOne(Project.name)
      }
    },
    projects: {
      type: new GraphQLList(ProjectType),
      resolve(parent, args) {
        return Project.find({})
      }
    }
  }
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: UserType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        stack: { type: new GraphQLList(GraphQLString) },
        project: { type: new GraphQLList(GraphQLString) }
      },
      resolve(parent, args) {
        let user = new User({
          name: args.name,
          email: args.email,
          stack: args.stack,
          project: args.project
        })
        return user.save()
      }
    },
    addProject: {
      type: ProjectType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        technology: { type: new GraphQLList(GraphQLString) },
        lead: { type: GraphQLString },
        contributor: { type: new GraphQLList(GraphQLString) }
      },
      resolve(parent, args) {
        let project = new Project({
          name: args.name,
          description: args.description,
          technology: args.technology,
          lead: args.lead,
          contributor: args.contributor
        })
        return project.save()
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})