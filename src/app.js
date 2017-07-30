import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import compression from 'compression'
import cors from 'cors'

import routes from 'routes'

const isDev = process.env.NODE_ENV === 'development'
const app = express()

if (isDev) {
	app.use(morgan('dev'))
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(compression())
app.use(cors())
app.use(helmet())
app.use('/', routes)

export default app
