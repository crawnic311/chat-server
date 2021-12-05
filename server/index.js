const express = require('express')
const app = express()


//Configures the app to parse JSON from the body.
app.use(express.json())

app.listen(3001, () => console.log('unity on 3001!'))