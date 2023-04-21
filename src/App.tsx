import { useState } from 'react'
import Header from './components/header'
import SearchMovies from './components/search-movies'
import ResultList from './components/result-list'
import testMovies from './components/test-data.json'

function App (): JSX.Element {
  const [movies, setMovies] = useState(testMovies);

  return (
    <div className="w-9/12 flex flex-col items-center m-auto">
      <Header />
      <SearchMovies setMovies={setMovies}/>
      <ResultList movies={movies}/>
    </div>
  )
}

export default App
