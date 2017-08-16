import RootMutation from 'schema/typeDefs/RootMutation'
import RootQuery from 'schema/typeDefs/RootQuery'

const Schema = `
	scalar Date

	schema {
		query: RootQuery
		mutation: RootMutation
	}
`

export default [RootQuery, RootMutation, Schema]
