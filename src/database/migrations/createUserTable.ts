import pg from "pg"
import { config } from "../../config/databaseConfig"
import handlePoolResponse from "../../utils/handlePoolResponse"

const pool = new pg.Pool(config)

export const createUserTable = async () => {
  const userTable = `
    CREATE TABLE IF NOT EXISTS 
    user_app (
      id VARCHAR(40) PRIMARY KEY,
      hash_password VARCHAR(255) NOT NULL,
      username VARCHAR(50) NOT NULL,
      email VARCHAR(50) NOT NULL)
  `
  
  const queryResponse = await pool.query(userTable)

  await pool.end()

  return await handlePoolResponse(queryResponse)
}

require('make-runnable')