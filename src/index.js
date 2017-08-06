import express from 'express'
import bodyParser from 'body-parser'
import compression from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import mongoose from 'mongoose'
import colors from 'colors'

import routes from 'routes'
import server from 'bin/server'

colors.setTheme({
	silly: 'rainbow',
	input: 'grey',
	verbose: 'cyan',
	prompt: 'grey',
	info: 'green',
	data: 'grey',
	help: 'cyan',
	warn: 'yellow',
	debug: 'blue',
	error: 'red'
})

mongoose.Promise = Promise

const isDev = process.env.NODE_ENV === 'development'
const app = express()

if (isDev) {
	mongoose.set('debug', true)
	app.use(morgan('dev'))
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(compression())
app.use(cors())
app.use(helmet())
app.use('/', routes)

app.use((req, res) => {
	res.status(404).json({
		message: 'not found'
	})
})

app.use((err, req, res) => {
	res.status(500).json(err)
})

server.init(app)
