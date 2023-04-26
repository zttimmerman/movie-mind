import { useState } from 'react'
import Header from './components/header'
import SearchMovies from './components/search-movies'
import ResultList from './components/result-list'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import testMovies from './components/test-data.json'
import WatchList from './components/watchlist'
import Footer from './components/footer'
import WatchOptions from './components/watch-options'
import RingLoader from 'react-spinners/RingLoader'

function App (): JSX.Element {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState<any>([]);
  const [isWatchListOpen, setIsWatchListOpen] = useState(false);
  const [isWatchOptionsOpen, setIsWatchOptionsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [providers, setProviders] = useState<any>({
    flatrate: [],
    buy: [],
    rent: []
  });

  return (
    <div className="w-9/12 flex flex-col items-center m-auto">
      <Header isWatchListOpen={isWatchListOpen} setIsWatchListOpen={setIsWatchListOpen}/>
      <SearchMovies setMovies={setMovies} setIsLoading={setIsLoading}/>
      <RingLoader
        color={'#20a68b'}
        loading={isLoading}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
        cssOverride={{ marginBottom: '2.5rem' }}
      />
      <ResultList movies={movies} watchlist={watchlist} setWatchlist={setWatchlist} setProviders={setProviders} isWatchOptionsOpen={isWatchListOpen} setIsWatchOptionsOpen={setIsWatchOptionsOpen}/>
      <Footer />
      <WatchList isWatchListOpen={isWatchListOpen} setIsWatchListOpen={setIsWatchListOpen} watchlist={watchlist} setWatchlist={setWatchlist}/>
      <WatchOptions isWatchOptionsOpen={isWatchOptionsOpen} setIsWatchOptionsOpen={setIsWatchOptionsOpen} providers={providers}/>
    </div>
  )
}

export default App
