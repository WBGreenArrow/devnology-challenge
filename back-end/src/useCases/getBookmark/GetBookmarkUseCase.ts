
import { client } from "../../prisma/client"

interface IGetBookMark{
    id: string;
}


class GetBookmarkUseCase {
    async execute({ id } : IGetBookMark){

        const bookmarkExists = await client.bookmarks.findFirst({
            where:{
               id
            }
        })

        if(!bookmarkExists){
            throw new Error("Error cannot find bookmark")
        }

        const bookMark = await client.bookmarks.findFirst({
            where:{
              id
            }
        })

        return { bookMark }
    }
}

export { GetBookmarkUseCase }