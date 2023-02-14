import "express-async-errors";
import dotenv from "dotenv";
import express, { NextFunction, Request, Response } from "express"
import cors from "cors";
import { router } from "./routes"

dotenv.config()

const app = express()

app.use(cors({
    origin:"*"
}))

app.use(express.json())

app.use(router)

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {

    response.statusCode = 409

    return response.json({
        status: "Error",
        message: error.message
    })
})

app.listen(3000, () => console.log("Server is running on port 3000"))