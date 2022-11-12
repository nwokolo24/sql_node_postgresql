const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const db = require('./queries')
const carsDB = require('./cars_queries')

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    response.json({info: 'Node.js, Express, and Postgres API'})
})

app.get('/users', db.getUsers)
app.get('/users', db.getUserById)
app.post('/users', bodyParser.json(), db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

// Cars API
app.get('/cars', carsDB.getAllCars)
app.get('/cars/make', carsDB.selectByMake)
app.get('/cars/model', carsDB.selectByModel)
app.get('/cars/search', carsDB.selecByRegularExpr)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})