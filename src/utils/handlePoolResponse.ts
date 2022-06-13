import { QueryResult } from "pg"
import { config } from "../config/databaseConfig"
import pg from "pg"

const pool = new pg.Pool(config)

export default async (queryResponse: QueryResult) => {
  if (!queryResponse) {
    await pool.end()
    return new Error("Unhandled error")
  }

  return queryResponse
}
