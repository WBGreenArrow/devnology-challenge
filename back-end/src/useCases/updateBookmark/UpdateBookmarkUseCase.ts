
import { client } from "../../prisma/client"

interface IUpdateListBookmark {
    id: string;
    data:{
        label?: string;
        url?: string;
    }
}


class UpdateBookmarkUseCase {
    async execute({ id, data } : IUpdateListBookmark) {

        if(!id){
            throw new Error("Bookmark not exists")
        }

        const bookmarkExists = await client.bookmarks.findFirst({
            where:{
                id
            }
        })

        if(!bookmarkExists){
            throw new Error("Bookmark not exists")
        }

        const bookmarkUpdated = await client.bookmarks.update({
            where:{
                id
            },
            data
        })

        return { bookmarkUpdated }
    }
}

export { UpdateBookmarkUseCase }