import puppeteerDev from "puppeteer";
import puppeteerCore from "puppeteer-core";
import chrome from "chrome-aws-lambda";
import { client } from "../../prisma/client"

interface IRequestCrawler{
    user_id: string;
    url: string;
}

let puppeteer;

if(process.env.NODE_ENV === 'production'){
  puppeteer = puppeteerCore
}else{
  puppeteer = puppeteerDev
}


class BlogCrawlerUseCase {

    async execute({  user_id, url}: IRequestCrawler ){
      let options = {}

      if(process.env.NODE_ENV === 'production'){
        options={
          args: [...chrome.args, "--hide-scrollbars","--disable-web-security"],
          defaultViewPort: chrome.defaultViewport,
          executablePath: await chrome.executablePath,
          handless: true,
          ignoreHTTPSErrors: true
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