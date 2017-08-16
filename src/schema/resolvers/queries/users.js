import { User } from 'models'

export default async () => {
	const users = await User.find({}).lean()
	return users
}
