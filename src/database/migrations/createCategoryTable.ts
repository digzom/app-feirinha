import handlePoolResponse from "../../utils/handlePoolResponse"
import { query } from "../db"

export const createCategoryTable = async () => {
  const categoryTable = `
    CREATE TABLE IF NOT EXISTS category (
      id VARCHAR(40),
      category_name VARCHAR(128) NOT NULL,
      PRIMARY KEY(id)
    )
    `

  const queryResponse = await query(categoryTable)

  return await handlePoolResponse(queryResponse)
}
