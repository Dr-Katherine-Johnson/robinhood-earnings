const express = require('express')
const path = require('path');
const app = express()
const port = 3000
const db = require('../data/index.js')

app.use(express.static(path.join(__dirname, '../dist')));

// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Earnings chart listening on port ${port}!`))
