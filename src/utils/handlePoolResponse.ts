import { QueryResult } from "pg"
import { pool } from "../database/db"

export default async (queryResponse: QueryResult) => {
  if (!queryResponse) {
    await pool.end()
    return new Error("Unhandled error")
  }

  return queryResponse
}
