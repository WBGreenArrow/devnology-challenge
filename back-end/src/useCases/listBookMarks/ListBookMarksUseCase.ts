
import { client } from "../../prisma/client"

interface IGetListBookMarks{
    user_id: string;
}


class ListBookMarksUseCase {
    async execute({ user_id } : IGetListBookMarks){

        if(!user_id){
            throw new Error("Error on get bookmarks")
        }

        const userAlreadyExists = await client.user.findFirst({
            where:{
               id: user_id
            }
        })

        if(!userAlreadyExists){
            throw new Error("Error on get bookmarks")
        }

        const bookMarksList = await client.bookmarks.findMany({
            where:{
                user_id
            }
        })

        return { bookMarksList }
    }
}

export { ListBookMarksUseCase }