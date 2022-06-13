import { Router } from "express"
import { createProductController } from "../controllers/createProductController"

const routes = Router()
routes.post("/products", createProductController)

export default routes
