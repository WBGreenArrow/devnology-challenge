import puppeteer from "puppeteer";

interface IRequestCrawler{
    url: string;
}


class BlogCrawlerUseCase {

    async execute({ url }: IRequestCrawler ){
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
        
          return { favoriteArticles }
    }

}

export { BlogCrawlerUseCase }