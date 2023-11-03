const express = require('express')
const db = require('./db')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const PORT = process.env.PORT || 3001


//middleware
const app = express();
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(cors())



//show routes
app.get('/', (req, res) => res.send('This is root'))



app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))