import { User } from 'schema/typeDefs/types'

const RootMutation = `
	type RootMutation {
		addUser(username: String!, description: String): User
	}
`

export default () => [RootMutation, User]
