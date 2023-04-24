import { useState } from 'react'
import axios from 'axios'

interface SearchMoviesProps {
  setMovies: React.Dispatch<React.SetStateAction<never[]>>
}

const SearchMovies = ({ setMovies }: SearchMoviesProps): JSX.Element => {
  const [query, setQuery] = useState('');
  // add handling if movie list comes but as successfull response but list is empty (GPT likely thinks query is too vague)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    axios.get('http://localhost:3000/movies/search', {
      params: {
        q: query
      }
    })
      .then(result => {
        console.log('result:', result.data);
        setMovies(result.data);
      })
      .catch(err => {
        console.log('unable to get movie recommendations, error:', err);
      })
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  }
  return (
    <div className="w-10/12 mt-32 mb-12">
      <h2 className="font-bold text-xl">Enter a topic and get 5 movie recommendations</h2>
      <form onSubmit={handleSubmit} >
        <div className="form-control mt-2">
          <div className="input-group">
            <input type="text" placeholder="light-hearted comedy movies" className="input input-bordered w-full" onChange={handleChange} value={query}/>
            <button type="submit" className="btn btn-square">
              <img src="film.svg" alt="Film Reel" />
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SearchMovies
