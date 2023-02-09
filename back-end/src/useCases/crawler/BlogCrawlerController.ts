import { Request, Response} from "express"
import { BlogCrawlerUseCase } from "./BlogCrawlerUseCase"
 
class BlogCrawlerController {

    async handle(request: Request, response: Response){

      const { url } = request.body

      if(!url){
        throw new Error("Error Invalid URL")
      }

      const blogCrawlerUseCase = new BlogCrawlerUseCase()

      const favoriteArticlesList = await blogCrawlerUseCase.execute({ url })

      return response.json(favoriteArticlesList)
       
    }

}

export { BlogCrawlerController }