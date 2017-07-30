import app from 'app'
import mongoose from 'mongoose'

mongoose.Promise = Promise

const isDev = process.env.NODE_ENV === 'development'

if (isDev) {
	mongoose.set('debug', true)
}

const connectDB = (timeInterval) => {
	const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/express-graphql-mongo-boilerplate'
	mongoose.connect(MONGO_URI, { useMongoClient: true })
		.then(() => {
			const PORT = process.env.PORT || 3000
			app.listen(PORT, () => {
				console.log(`Server listening on port ${PORT}`)
			})
		}).catch(() => {
			console.log('MongoDB not ready, retry in 5 seconds...')
			setTimeout(connectDB, timeInterval)
		})
}

connectDB(5000)
