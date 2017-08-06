import { UserInterface } from 'schema/typeDefs/interfaces'

const User = `
	type User implements UserInterface {
		id: ID!
		username: String!
		description: String
	}
`

export default () => [User, UserInterface]
