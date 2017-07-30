const RootQuery = `
	type RootQuery {
		hello(name: String): String
	}
`

export default () => [RootQuery]
