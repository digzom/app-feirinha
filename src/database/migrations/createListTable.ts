import handlePoolResponse from "../../utils/handlePoolResponse"
import { pool } from "../db"

export const createListTable = async () => {
  const createListTable = `
    DROP TABLE IF EXISTS list;

    CREATE TABLE list (
      id VARCHAR(40), 
      user_id VARCHAR(40) NOT NULL,
      list_name VARCHAR(128) NOT NULL,
      PRIMARY KEY(id),
      CONSTRAINT fk_user
        FOREIGN KEY(user_id)
          REFERENCES user_app(id)
          ON DELETE NO ACTION
          ON UPDATE NO ACTION
    )
    `

  const queryResponse = await pool.query(createListTable)

  await pool.end()

  return handlePoolResponse(queryResponse)
}

require('make-runnable')