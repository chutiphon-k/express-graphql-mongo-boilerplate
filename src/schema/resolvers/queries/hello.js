import HandleError from 'schema/resolvers/errors'

export default (obj, args) => {
	const { name } = args
	if (name && name.toLowerCase() === 'error') throw new HandleError()

	return `Hi ${name} !!!`
}
