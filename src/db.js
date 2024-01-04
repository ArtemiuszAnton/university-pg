const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    port: '5432',
    password: '12345678',
    user: 'postgres',
    database: 'University'
})

module.exports = { pool }