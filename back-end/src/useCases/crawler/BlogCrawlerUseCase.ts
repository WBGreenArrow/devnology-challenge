import puppeteer from "puppeteer";
import { client } from "../../prisma/client"

interface IRequestCrawler{
    user_id: string;
    url: string;
}


class BlogCrawlerUseCase {

    async execute({  user_id, url}: IRequestCrawler ){
        const browser = await puppeteer.launch()
        const page = await browser.newPage()

        await page.goto(url)

        const favoriteArticles = await page.evaluate(() => {

            const articles = Array.from(
              document.querySelectorAll('.blog-article-card')
            )
            
            return articles.map((article) => ({

              title: article.querySelector('h1').textContent,

              url: article.querySelector('a').getAttribute('href'),

            }))
          })
        
          await browser.close()

       favoriteArticles.forEach(async(bookmark)  => {
             await client.bookmarks.create({
              data:{
                user_id,
                label: bookmark.title,
                url: bookmark.url
              }
            })
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