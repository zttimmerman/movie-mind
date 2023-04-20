import { useState } from 'react'
import Header from './components/header'
import SearchMovies from './components/search-movies'

function App (): JSX.Element {
  const [movies, setMovies] = useState([]);

  return (
    <div className="App">
      <Header />
      <SearchMovies setMovies={setMovies}/>
    </div>
  )
}

export default App
