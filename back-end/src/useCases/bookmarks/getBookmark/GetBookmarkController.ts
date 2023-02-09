import { Request, Response } from "express"
import { GetBookmarkUseCase } from "./GetBookmarkUseCase"

class GetBookmarkController {

    async handle(request: Request, response: Response){
        const { id } = request.params

        const getBookmarkUseCase = new GetBookmarkUseCase()

        const bookmark = await getBookmarkUseCase.execute({
             id
        })

        response.json(bookmark)
    }

}

export { GetBookmarkController }