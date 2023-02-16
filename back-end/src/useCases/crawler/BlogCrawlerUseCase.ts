
import { client } from "../../prisma/client"
import axios from 'axios'
import cheerio from 'cheerio'
interface IRequestCrawler{
    user_id: string;
    url: string;
}
class BlogCrawlerUseCase {

    async execute({  user_id, url}: IRequestCrawler ){
        const response = await axios.get(url);
        const html = response.data;

        const $ = cheerio.load(html);

        const favoriteArticles = $('.blog-article-card').map((i, el) => ({
            title: $(el).find('h1').text(),
            url: $(el).find('a').attr('href')
        })).get();

          const newfavoriteArticles = favoriteArticles.map((item) =>({
              user_id,
              label: item.title,
              url: item.url
          }))

          await client.bookmarks.createMany({
            data: newfavoriteArticles
          })
          
        const bookmarkList = await client.bookmarks.findMany({
          where:{
            user_id
          }
        })
          return { bookmarkList }
    }

}

export { BlogCrawlerUseCase }