import { client } from "../../prisma/client"


interface ICreateBookmarks{
    label: string;
    url: string;
    user_id: string;
}


class CreateBookmarksUseCase {

    async execute({ label, url, user_id }: ICreateBookmarks){

        if(!user_id){
            throw new Error("Error on save")
        }

        const userAlreadyExists = await client.user.findFirst({
            where:{
                id: user_id
            }
        })

        if(!userAlreadyExists){
            throw new Error("Error on save")
        }

        const bookmark = await client.bookmarks.create({
            data:{
                label, 
                url,  
                user_id,
            }
        })

        return { bookmark }
    }

}


export { CreateBookmarksUseCase }