import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"

export function ensureAutenticate(request: Request, response: Response, next: NextFunction){
    const authToken = request.headers.authorization

    if(!authToken){
        return response.status(401).json({
            message: "Unauthorized"
        })
    }
    const [, token] = authToken.split(" ")

    try {
        verify(token, process.env.JWT_SECRET)
        return next()
        
    } catch (error) {
        return response.status(401).json({
            message: "Unauthorized"
        })
    }

} 