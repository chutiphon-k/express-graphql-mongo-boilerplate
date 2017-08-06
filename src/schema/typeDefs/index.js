// import RootMutation from 'schema/typeDefs/RootMutation'
import RootQuery from 'schema/typeDefs/RootQuery'

const Schema = `
	schema {
		query: RootQuery
	}
`

export default [RootQuery, Schema]
