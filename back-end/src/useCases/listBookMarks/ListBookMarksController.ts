import { Request, Response } from "express"
import { ListBookMarksUseCase } from "./ListBookMarksUseCase"

class ListBookMarksController {

    async handle(request: Request, response: Response){
        const { user_id } = request.body

        const listBookMarksUseCase = new ListBookMarksUseCase()

        const bookmarksList = await listBookMarksUseCase.execute({
             user_id 
            })

        response.json(bookmarksList)
    }

}

export { ListBookMarksController }