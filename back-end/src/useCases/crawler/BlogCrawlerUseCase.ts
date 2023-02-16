
import { client } from "../../prisma/client"
import puppeteer  from "puppeteer-core"
// import puppeteer  from "puppeteer"
import chromium from "chrome-aws-lambda"
interface IRequestCrawler{
    user_id: string;
    url: string;
}
class BlogCrawlerUseCase {

    async execute({  user_id, url}: IRequestCrawler ){
      const browser = await puppeteer.connect({
        //@ts-ignore
        browserWSEndpoint: await chromium.default().executablePath,
      });

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