
import { client } from "../../../prisma/client";

interface IDeleteBookmark {
    id: string;
}


class DeleteBookmarkUseCase {
    async execute({ id } : IDeleteBookmark) {

        const bookmarkExists = await client.bookmarks.findFirst({
            where:{
                id
            }
        })

        if(!bookmarkExists){
            throw new Error("Bookmark not exists")
        }

        const bookmarkDeleted = await client.bookmarks.delete({
            where:{
                id
            }
        })

        return { bookmarkDeleted }
    }
}

export { DeleteBookmarkUseCase }