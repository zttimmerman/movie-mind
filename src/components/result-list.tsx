import ResultItem from './result-item'

interface ResultListProps {
  movies: Movie[];
  watchlist: Movie[]
  setWatchlist: React.Dispatch<React.SetStateAction<any[]>>;
  isWatchOptionsOpen: boolean;
  setIsWatchOptionsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setProviders: React.Dispatch<React.SetStateAction<object>>;
}

interface Movie {
  id: number
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  genres: Genres[]
}

interface Genres {
  id: number;
  name: string
}

const ResultList = ({ movies, watchlist, setWatchlist, isWatchOptionsOpen, setIsWatchOptionsOpen, setProviders }: ResultListProps): JSX.Element => {
  return (
    <ul className=''>
      {movies.map(movie => {
        return <ResultItem key={movie.id} movie={movie} watchlist={watchlist} setWatchlist={setWatchlist} isWatchOptionsOpen={isWatchOptionsOpen} setIsWatchOptionsOpen={setIsWatchOptionsOpen} setProviders={setProviders}/>
      })}
    </ul>
  )
}

export default ResultList