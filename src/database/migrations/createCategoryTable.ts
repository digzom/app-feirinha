import handlePoolResponse from "../../utils/handlePoolResponse"
import { pool } from "../db"

export const createCategoryTable = async () => {
  const categoryTable = `
    DROP TABLE IF EXISTS category

    CREATE TABLE category (
      id VARCHAR(40),
      category_name VARCHAR(128) NOT NULL,
      PRIMARY KEY(id)
    )
    `

  const queryResponse = await pool.query(categoryTable)

  await pool.end()

  return handlePoolResponse(queryResponse)
}

require('make-runnable')