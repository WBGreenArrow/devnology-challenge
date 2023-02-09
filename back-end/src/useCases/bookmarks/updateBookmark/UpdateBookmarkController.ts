import { Request, Response } from "express"
import { UpdateBookmarkUseCase } from "./UpdateBookmarkUseCase"

class UpdateBookmarkController {

    async handle(request: Request, response: Response){
        const { id } = request.params
        const data = request.body

        const updateBookmarkUseCase = new UpdateBookmarkUseCase()

        const bookmarkUpdated = await updateBookmarkUseCase.execute({
            id,
            data
        })
        
        response.json(bookmarkUpdated)
    }

}

export { UpdateBookmarkController }