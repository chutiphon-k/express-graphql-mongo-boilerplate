import { Router } from 'express'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'

import schema from 'schema'

const isDev = process.env.NODE_ENV === 'development'

const router = Router()

if (isDev) {
	router.get('/graphql', graphiqlExpress({
		endpointURL: '/graphql'
	}))
}

router.get('/', (req, res) => {
	res.send('123')
})

router.post('/graphql', graphqlExpress(({ user }) => ({
	schema,
	context: { user }
})))

export default router
