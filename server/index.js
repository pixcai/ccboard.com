import Nuxt from 'nuxt'
import express from 'express'
import api from './api'
import Board from './board'
import boardWatcher from './board-watcher'
import nuxtConfig from '../nuxt.config'
import boardConfig from '../board.config.json'

const app = express()
const nuxt = new Nuxt(nuxtConfig)
const board = new Board()
const host = process.env.HOST || boardConfig.host
const port = process.env.PORT || boardConfig.port

// Watching board change
boardWatcher(board)
// Import API Routes
app.use('/api', api)
// Add nuxt.js middleware
app.use(nuxt.render)
// Listen the server
app.listen(port, host)

console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
