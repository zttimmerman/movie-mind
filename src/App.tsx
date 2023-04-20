import { useState } from 'react'
import Header from './components/header'
import SearchMovies from './components/search-movies'
import ResultList from './components/result-list'

function App (): JSX.Element {
  const [movies, setMovies] = useState([]);

  return (
    <div className="App">
      <Header />
      <SearchMovies setMovies={setMovies}/>
      <ResultList movies={movies}/>
    </div>
  )
}

export default App
