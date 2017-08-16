import mongoose from 'mongoose'

const PORT = process.env.PORT || 3000
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/express-graphql-mongo-boilerplate'
const AttemptConnectDB = 5

const init = async (app) => {
	try {
		await mongoose.connect(MONGO_URL)
		app.listen(PORT, () => {
			console.log(`[INFO] Listening on *: ${PORT}`.info)
		})
	} catch (e) {
		console.log(`[Error] Cannot connect MongoDB`.error)
		let couter = 0
		let interval = setInterval(() => {
			console.log(`MongoDB not ready, retry in ${AttemptConnectDB-couter} seconds...`.data)
			if (couter === AttemptConnectDB) {
				clearInterval(interval)
				init(app)
			}
			++couter
		}, 1000)
	}
}

export default {
	init
}
