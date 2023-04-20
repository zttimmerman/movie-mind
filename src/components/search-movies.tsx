import { useState } from 'react'
import axios from 'axios'

const SearchMovies = (): JSX.Element => {
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
        console.log('result:', result);
      })
      .catch(err => {
        console.log('unable to get movie recommendations, error:', err);
      })
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  }
  return (
    <form className='mt-32' onSubmit={handleSubmit}>
      <label htmlFor='movie-input'>Get Movie Recommendations</label>
      <input type='text' name='movieQuery' id='movie-input' value={query} onChange={handleChange}/>
      <input type='submit' value='Search'/>
    </form>
  )
}

export default SearchMovies