import { User } from 'models'
import { createError } from 'apollo-errors';

const FooError = createError('FooError', {
  message: 'A foo error has occurred'
});

export default async (obj, { username, description }, context) => {
	const user = await User.find({ username })
	if (user) throw new FooError({ data: {
		"aaa": 100
	} })
	const newUser = await User.create({
		username,
		description
	})
	return newUser
}
