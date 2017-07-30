import { Router } from 'express'
import graphqlHTTP from 'express-graphql'
import { formatError } from 'apollo-errors'

import schema from 'schema'

const router = Router()

router.get('/', (req, res) => {
	res.send('Express Qraphql Mongo Boilerplate')
})

router.use('/graphql', graphqlHTTP({
	schema,
	formatError,
	graphiql: process.env.NODE_ENV !== 'production'
}))

export default router
