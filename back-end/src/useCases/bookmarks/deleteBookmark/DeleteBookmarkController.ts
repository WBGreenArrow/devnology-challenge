import { Request, Response } from "express"
import { DeleteBookmarkUseCase } from "./DeleteBookmarkUseCase"

class DeleteBookmarkController {

    async handle(request: Request, response: Response){
        const { id } = request.params

        const deleteBookmarkUseCase = new DeleteBookmarkUseCase()

        const bookmarkDeleted = await deleteBookmarkUseCase.execute({
            id
        })
        
        response.json(bookmarkDeleted)
    }

}

export { DeleteBookmarkController }