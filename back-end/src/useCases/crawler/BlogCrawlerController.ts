import { Request, Response} from "express"
import { BlogCrawlerUseCase } from "./BlogCrawlerUseCase"
 
class BlogCrawlerController {

    async handle(request: Request, response: Response){

      const { user_id } = request.body
      // const { url } = request.body
      const url  = "https://devgo.com.br/"

      // if(!url){
      //   throw new Error("Error Invalid URL")
      // }

      const blogCrawlerUseCase = new BlogCrawlerUseCase()

      const { bookmarkList } = await blogCrawlerUseCase.execute({
        user_id, 
        url
      })

      return response.json(bookmarkList)
       
    }

}

export { BlogCrawlerController }