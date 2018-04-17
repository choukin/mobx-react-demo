import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import escape from 'jsesc'

const app = express()

app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')))