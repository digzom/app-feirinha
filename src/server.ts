import express, { Response, Request } from "express"
import dotenv from "dotenv"
import pg from "pg"
import { config } from "./config/databaseConfig"
import bodyParser from "body-parser"
import cors from "cors"
import helmet from "helmet"
import routes from "./routes"

dotenv.config()
const pool = new pg.Pool(config)
const port = process.env.PORT
const app = express()

pool.on("connect", () => console.log("Connected to Database"))

app.use(cors())
app.use(helmet())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())
app.use(routes)

pool.on("remove", () => {
  console.log("client removed")
  process.exit
})


app.listen(port, () => console.log(`Server is running`))
