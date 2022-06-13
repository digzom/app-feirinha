import pg from "pg"
import { config } from "../../config/databaseConfig"
import handlePoolResponse from "../../utils/handlePoolResponse"

const pool = new pg.Pool(config)

export const createCategoryTable = async () => {
  const categoryTable = `
    CREATE TABLE IF NOT EXISTS
    product (
      id VARCHAR(40) PRIMARY KEY,
      category_name VARCHAR(128) NOT NULL
      )
    `

  const queryResponse = await pool.query(categoryTable)

  await pool.end()

  return handlePoolResponse(queryResponse)
}

require('make-runnable')