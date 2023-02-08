import { Request, Response } from "express"
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase"


class AuthenticateUserController {

    async handle(request: Request, response: Response){
        const { username, password } = request.body

        const authenticateUser = new AuthenticateUserUseCase()

        const token = await authenticateUser.execute({
            username, 
            password
        })

        return response.json(token)

    }

}

export { AuthenticateUserController }