const Pool = require('pg').Pool
const pool = new Pool({
    user: 'me',
    host: 'localhost',
    database: 'test',
    port: 5432,
    password: 'pword'
})

const getAllCars = (_request, response) => {
    pool.query('SELECT * FROM cars ORDER BY id', 
    (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const selectByMake = (_request, response) => {
    pool.query('SELECT * FROM cars WHERE make = $1',
    ['Cadillac'],
    (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const selectByModel = (_request, response) => {
    pool.query('SELECT * FROM cars WHERE model = $1',
    ['Celica'],
    (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const selecByRegularExpr = (request, response) => {
    pool.query('SELECT * FROM cars WHERE model_year LIKE $1 OR make LIKE $2 OR model LIKE $3',
    ['%1%', '%Ol%', '%GL%'],
    (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
module.exports = {
    getAllCars,
    selectByMake,
    selectByModel,
    selecByRegularExpr,
}