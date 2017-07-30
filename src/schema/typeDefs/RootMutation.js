const RootMutation = `
	type RootMutation {
		create(name: String): String
	}
`

export default () => [RootMutation]
