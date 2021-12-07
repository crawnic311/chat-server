const mc = require('./controllers/messages_controller')

const express = require('express')
const app = express()

const massive = require('massive')

//Configures the app to parse JSON from the body.
app.use(express.json())

const baseURL = '/api/messages'
const dbURL = '/api/food'
app.post(baseURL, mc.create)
app.get(baseURL, mc.read)
app.put(`${baseURL}/:id`, mc.update)
app.delete(`${baseURL}/:id`, mc.delete)
app.post(dbURL, (req, res) => {
    const db = req.app.get("db")
    const {name, type, price} = req.body
    //db.insert_food([name, type, price])

    const food = db.select_food()
    console.log(food)
    res.status(200).send(food)
})


massive({
    connectionString: "postgres://axqesqtdwsmyzm:df39c39702237670b5f4fbdb45721f24146ec658bcdeb3a822f558e471944bd7@ec2-34-195-69-118.compute-1.amazonaws.com:5432/d4v8stpc1beth8",
    ssl: {
      rejectUnauthorized: false,
    },
  }).then((dbInstance) => {
    app.set("db", dbInstance);
    console.log(dbInstance)
    console.log("db connected");
  });


app.listen(3001, () => console.log('unity on 3001!'))