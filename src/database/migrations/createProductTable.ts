import { query } from "../db"
import handlePoolResponse from "../../utils/handlePoolResponse"

export const createProductTable = async () => {
  const productTable = `
    CREATE TABLE IF NOT EXISTS product (
      id VARCHAR(40) PRIMARY KEY,
      product_name VARCHAR(128) NOT NULL)
    `

  const queryResponse = await query(productTable)

  return handlePoolResponse(queryResponse)
}


