const UserInterface = `
	interface UserInterface {
		_id: ID!
		username: String!
		description: String
		profileImage: String
	}
`

export default () => [UserInterface]
