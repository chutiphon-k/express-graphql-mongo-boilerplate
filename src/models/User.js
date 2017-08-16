import mongoose from 'mongoose'

const schema = new mongoose.Schema({
	username: {
		type: String,
		unique: true
	},
	description: String,
	profileImage: String
}, {
	timestamps: true
})

export default mongoose.model('User', schema)
