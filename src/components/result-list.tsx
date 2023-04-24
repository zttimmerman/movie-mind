import ResultItem from './result-item'

interface ResultListProps {
  movies: Movie[];
  watchlist: Movie[]
  setWatchlist: React.Dispatch<React.SetStateAction<any[]>>
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

const ResultList = ({ movies, watchlist, setWatchlist }: ResultListProps): JSX.Element => {
  return (
    <ul className=''>
      {movies.map(movie => {
        return <ResultItem key={movie.id} movie={movie} watchlist={watchlist} setWatchlist={setWatchlist}/>
      })}
    </ul>
  )
}

export default ResultList