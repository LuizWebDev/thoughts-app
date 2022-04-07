const thoughtsRoutes = require('./routes/thought')
const express = require('express');
const cors = require('cors');
const server = express();
const bodyParser = require("body-parser")
server.use(cors());
server.use(express.json());
server.use(bodyParser.json())
const { Pool } = require("pg");
const pool = new Pool()

const port = process.env.PORT || 3050;

server.use('/thoughts', thoughtsRoutes)

server.get('/', (req, res) => res.send('Welcome to the library'))
server.post('/form', (req, res) => {
    const post = req.body
    console.log(post)
})


server.listen(port, () => console.log(`Express now departing from port ${port}!`))
