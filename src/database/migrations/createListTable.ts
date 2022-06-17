import handlePoolResponse from "../../utils/handlePoolResponse"
import { query } from "../db"

export const createListTable = async () => {
  const createListTable = `
    CREATE TABLE IF NOT EXISTS list (
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

  const queryResponse = await query(createListTable)

  return handlePoolResponse(queryResponse)
}

require('make-runnable')