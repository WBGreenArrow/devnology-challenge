
import { client } from "../../prisma/client"

interface IRequestCrawler{
    user_id: string;
    url: string;
}

let puppeteer;
let chromium;

if(process.env.AWS_LAMBDA_FUNCTION_VERSION) {
  puppeteer = require("puppeteer-core")
  chromium = require("chrome-aws-lambda")
}else{
  puppeteer = require("puppeteer")
}


class BlogCrawlerUseCase {

    async execute({  user_id, url}: IRequestCrawler ){
      let options = {}

      if(process.env.AWS_LAMBDA_FUNCTION_VERSION){
        options={
          executablePath: await chromium.executablePath,
          headless: chromium.headless,
        }
      }

        const browser = await puppeteer.launch(options)
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