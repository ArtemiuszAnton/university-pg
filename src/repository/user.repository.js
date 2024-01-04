const { pool } = require('../db');

async function createUserDB(name, surname, birth, city, age) {
    const client = await pool.connect();
    const sql_1 = "INSERT INTO users_info (birth, city, age) VALUES ($1, $2, $3) RETURNING *";
    const { rows } = await client.query(sql_1, [birth, city, age])

    const sql_2 = "INSERT INTO users (name, surname, info_id) VALUES ($1, $2, $3) RETURNING *";
    const { rows: rows_2 } = await client.query(sql_2, [name, surname, rows[0].id]);

    return { ...rows_2[0], ...rows[0] }
}

async function getAllUsersDB() {
    const client = await pool.connect();
    const sql = "SELECT * FROM users_info JOIN users ON users.info_id = users_info.id";
    const { rows } = (await client.query(sql))
    return rows
}

async function updateUsersByIdDB(usersId, users_infoId, name, surname, birth, city, age) {
    const client = await pool.connect();
    const sql_1 = "UPDATE users_info SET  birth = $1, city = $2, age = $3 WHERE id = $4 RETURNING *";
    const { rows } = await client.query(sql_1, [birth, city, age, users_infoId]);

    const sql_2 = "UPDATE users SET name = $1, surname = $2, info_id = $3 WHERE id = $4 RETURNING *";
    const { rows: rows_2 } = await client.query(sql_2, [name, surname, users_infoId, usersId]);
    return { ...rows_2[0], ...rows[0] }
}

async function deleteUserByIdDB(usersId, users_infoId) {
    const client = await pool.connect();
    const sql_2 = "DELETE FROM users WHERE id = $1 RETURNING *";
    const { rows: rows_2 } = await client.query(sql_2, [usersId]);
    
    const sql_1 = "DELETE FROM users_info WHERE id = $1 RETURNING *";
    const { rows } = await client.query(sql_1, [users_infoId]);

    return { ...rows_2[0], ...rows[0] }
}




module.exports = { createUserDB, getAllUsersDB, updateUsersByIdDB, deleteUserByIdDB }