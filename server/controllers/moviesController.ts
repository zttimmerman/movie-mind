import type { RequestHandler } from 'express'
import '../utils/fetch-polyfill'
import { ChatGPTAPI } from 'chatgpt'
import axios from 'axios'
import type { AxiosResponse } from 'axios'

interface ReqQuery {
  q: string
}

const moviesController = {
  getRecommendations: ((req, res) => {
    const query = req.query.q;
    const tmdbBaseURL: string = 'https://api.themoviedb.org/3';
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
      Before each movie in the list, write the movie number with a $ in front. Do not put the year in the title.`)
      console.log(data.text)

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

    void askGPT()
      .then(result => {
        console.log(result)
        return result;
      })
      .then((result) => {
        const apiKey = process.env.TMDB_API_KEY;
        const url = tmdbBaseURL + '/search/movie';
        const promise1 = axios.get(url, {
          params: {
            api_key: apiKey,
            query: result[0]
          }
        });
        const promise2 = axios.get(url, {
          params: {
            api_key: apiKey,
            query: result[1]
          }
        })
        const promise3 = axios.get(url, {
          params: {
            api_key: apiKey,
            query: result[2]
          }
        });
        const promise4 = axios.get(url, {
          params: {
            api_key: apiKey,
            query: result[3]
          }
        })
        const promise5 = axios.get(url, {
          params: {
            api_key: apiKey,
            query: result[4]
          }
        })

        const allMovies = Promise.all([promise1, promise2, promise3, promise4, promise5]);
        const finalResult: object[] = [];
        const moviesDetailsPromises: Array<Promise<object>> = [];

        allMovies.then(results => {
          results.forEach((movieSearchResult, index) => {
            console.log('movie results', movieSearchResult.data.results[0]);
            const movieId: number = movieSearchResult.data.results[0].id;
            const url = `${tmdbBaseURL}/movie/${movieId}`;
            moviesDetailsPromises[index] = axios.get(url, {
              params: {
                api_key: apiKey
              }
            })
          })

          const allMoviesDetails = Promise.all(moviesDetailsPromises) as Promise<[AxiosResponse<any, any>, AxiosResponse<any, any>, AxiosResponse<any, any>, AxiosResponse<any, any>]>;

          void allMoviesDetails
            .then(results => {
              console.log('result', result);
              results.forEach((movieDetailResult) => {
                finalResult.push(movieDetailResult.data)
              })
              console.log('final result', finalResult);
              res.send(finalResult);
            })
        })
          .catch(err => {
            console.log('unable to get movie details from TMDB, err:', err);
          })
      })
  }) as RequestHandler<unknown, unknown, unknown, ReqQuery>
}

export default moviesController