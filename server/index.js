const mc = require('./controllers/messages_controller')

const express = require('express')
const app = express()

//Configures the app to parse JSON from the body.
app.use(express.json())

app.listen(3001, () => console.log('unity on 3001!'))

const baseURL = 'api/messages'
app.post(baseURL, mc.create)
app.get(baseURL, mc.read)
app.put(`${baseURL}/:id`, mc.update)
app.delete(`${baseURL}/:id`, mc.delete)