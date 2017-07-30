import RootQuery from 'schema/typeDefs/RootQuery'
import RootMutation from 'schema/typeDefs/RootMutation'

const Schema = `
	schema {
		query: RootQuery
		mutation: RootMutation
	}
`
export default [RootMutation, RootQuery, Schema]
