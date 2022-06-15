import { Pool } from "pg"
import { config } from "../config/databaseConfig"

const pool = new Pool(config)

export { pool }
