import pg from "pg"
import { config } from "../../config/databaseConfig"
import handlePoolResponse from "../../utils/handlePoolResponse"

const pool = new pg.Pool(config)

export const createListTable = async () => {
  const createListTable = `
    CREATE TABLE IF NOT EXISTS
    list (
      id VARCHAR(40) PRIMARY KEY,
      user_id VARCHAR(40) NOT NULL,
      list_name VARCHAR(128) NOT NULL
    )
    `

  const queryResponse = await pool.query(createListTable)

  await pool.end()

  return handlePoolResponse(queryResponse)
}

require('make-runnable')