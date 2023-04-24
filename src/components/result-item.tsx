interface ResultItemProps {
  movie: Movie;
  watchlist: Movie[]
  setWatchlist: React.Dispatch<React.SetStateAction<any[]>>
}

interface Movie {
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

const ResultItem = ({ movie, watchlist, setWatchlist }: ResultItemProps): JSX.Element => {
  const handleAddToWatchlistClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (!watchlist.some((watchlistMovie) => watchlistMovie.title === movie.title)) {
      setWatchlist([...watchlist, movie]);
    }
  }
  return (
    <li className='mb-10'>
      <div className="card card-side bg-base-200 shadow-xl w-9/12 m-auto">
        <figure className="w-6/12"><img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Movie"/></figure>
        <div className="card-body w-6/12">
          <h2 className="card-title font-extrabold text-3xl">{movie.title}</h2>
          <span className='font-extralight'>{movie.release_date.slice(0, 4)}</span>
          {/* <div className='flex justify-between w-full'>
          </div> */}
            <div className='max-h-72 overflow-auto my-4'>{movie.overview}</div>
            <div>
              {movie.genres.map(genre => {
                return (
                  <span className="mr-2 italic font-light" key={genre.id}>{genre.name}</span>
                )
              })}
            </div>
            <div className="card-actions mt-auto justify-end">
              <button className="btn btn-secondary">WATCH OPTIONS</button>
              <button className="btn btn-primary" onClick={handleAddToWatchlistClick}>+ Watchlist</button>
            </div>
          </div>
      </div>
    </li>
  )
}

export default ResultItem