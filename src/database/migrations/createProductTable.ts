import pg from "pg"
import { config } from "../../config/databaseConfig"
import handlePoolResponse from "../../utils/handlePoolResponse"

const pool = new pg.Pool(config)

export const createProductTable = async () => {
  const productTable = `
    CREATE TABLE IF NOT EXISTS
    product (
      id VARCHAR(40) PRIMARY KEY,
      product_name VARCHAR(128) NOT NULL)
    `

  const queryResponse = await pool.query(productTable)

  await pool.end()

  return handlePoolResponse(queryResponse)
}

require('make-runnable')

