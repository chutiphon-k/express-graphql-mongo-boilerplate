import { User } from 'schema/typeDefs/types'

const RootQuery = `
	type RootQuery {
		users: [User]
	}
`

export default () => [RootQuery, User]
