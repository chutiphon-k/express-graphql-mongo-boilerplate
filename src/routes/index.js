import { Router } from 'express'
import graphqlHTTP from 'express-graphql'
import { formatError, createError } from 'apollo-errors'

// import schema from 'schema'
import { makeExecutableSchema } from 'graphql-tools'

const typeDefs = `
  type Query {
	hello(name: String!): String
  }

  schema {
	query: Query
  }
`
const resolvers = {
	Query: {
		hello (obj, args) {
			const { name } = args
			if (name && name.toLowerCase() === 'james') {
				const FooError = createError('Hello', {
					message: 'Nooooo'
				})
				throw new FooError()
			}
			return `Hi ${name} !!!`
		}
	}
}

const schema = makeExecutableSchema({ typeDefs, resolvers })

const router = Router()

router.get('/', (req, res) => {
	res.send('Hello')
})

router.use('/graphql', graphqlHTTP({
	schema,
	formatError,
	graphiql: process.env.NODE_ENV !== 'production'
}))

export default router
