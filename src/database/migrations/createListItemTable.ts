import pg from "pg"
import { config } from "../../config/databaseConfig"
import handlePoolResponse from "../../utils/handlePoolResponse"
import { pool } from "../db"

export const createListItemTable = async () => {
  const listItemTable = `
    CREATE TABLE IF NOT EXISTS
    list_item (
      product_id VARCHAR(40) PRIMARY KEY,
      list_id VARCHAR(128) NOT NULL,
      item_qtd INT,
      brand VARCHAR(40)
      )
    `

  const queryResponse = await pool.query(listItemTable)

  await pool.end()

  return handlePoolResponse(queryResponse)
}

require('make-runnable')

