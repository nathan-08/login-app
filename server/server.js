const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const ctrl = require('./controller')

app.use(bodyParser.json())


// endpoints
app.get('/api/health-check', ctrl.healthCheck )

app.post('/api/login', ctrl.login )


app.listen(1337, listening(1337))
// const PORT = 1337
// app.listen(PORT, ()=>console.log(`Listening on port ${PORT}`))

function listening (portNum) {
    console.log(`Listening on port ${portNum}`)
} 