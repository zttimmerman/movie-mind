import type { RequestHandler } from 'express'
import '../utils/fetch-polyfill'
import { ChatGPTAPI } from 'chatgpt'

interface ReqQuery {
  q: string
}

const moviesController = {
  getRecommendations: ((req, res) => {
    const query = req.query.q;
    // console.log('requested movie query', req.query);
    async function askGPT (): Promise<string[]> {
      const api = new ChatGPTAPI({
        apiKey: process.env.OPENAI_API_KEY ?? ''
      })

      const data = await api.sendMessage(`Give me 5 movies that you would recommend based on the following topic: ${query}.
      Format: Movie Title.
      Example Response:
      "$1. Titanic
       $2. Patriot's Day
       $3. Star Wars
       $4. Pirates of the Carribean
       $5. Toy Story"
      Before each movie in the list, write the movie number with a $ in front.`)
      // console.log(data.text)

      const lines: string[] = data.text.split('\n');
      const movieTitles: string[] = [];

      lines.forEach(line => {
        if (line.startsWith('$') || (line.match(/^\d/) != null)) {
          movieTitles.push(line.slice(line.indexOf('.') + 1).trim());
        }
      })
      console.log('movie titles', movieTitles)
      return movieTitles;
    }

    askGPT()
      .then(result => {
        console.log(result)
        res.send(result)
      })
      .catch(err => {
        console.log(err)
      })
  }) as RequestHandler<unknown, unknown, unknown, ReqQuery>
}

export default moviesController