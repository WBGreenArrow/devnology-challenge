import { Request, Response } from "express"
import { CreateBookmarksUseCase } from "./CreateBookmarksUseCase"


class CreateBookmarksController {

    async handle(request: Request, response: Response){
        const { label, url, user_id } = request.body

        const createBookmarksUseCase = new CreateBookmarksUseCase()

        const bookmark = await createBookmarksUseCase.execute({
            label, 
            url, 
            user_id
        })

        return response.json(bookmark)

    }

}

export { CreateBookmarksController }