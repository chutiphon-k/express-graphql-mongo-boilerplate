import { UserInterface } from 'schema/typeDefs/interfaces'

const User = `
	type User implements UserInterface {
		_id: ID!
		username: String!
		description: String
		profileImage: String
		createdAt: Date!
		updatedAt: Date!
	}
`

export default () => [User, UserInterface]
