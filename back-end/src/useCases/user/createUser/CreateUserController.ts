import { Request, Response } from "express"
import { CreateUserUseCase } from "./CreateUserUseCase"


class CreateUserController {

    async handle(request: Request, response: Response){
        const { username, password } = request.body

        const createUserUseCase = new CreateUserUseCase()

        const responseUserData = await createUserUseCase.execute({
            username,
            password
        })

        return response.json({...responseUserData})

    }

}

export { CreateUserController }