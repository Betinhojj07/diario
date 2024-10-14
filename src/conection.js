import mysql2 from "mysql2/promise"
import "dotenv/config"

const db = await mysql2.createConnection({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"diario"
})

console.log("conexão realizada")

export default db