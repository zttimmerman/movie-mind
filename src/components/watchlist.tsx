interface WatchListProps {
  isWatchListOpen: boolean;
  setIsWatchListOpen: React.Dispatch<React.SetStateAction<boolean>>;
  watchlist: Movie[];
  setWatchlist: React.Dispatch<React.SetStateAction<any[]>>;
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

const WatchList = ({ isWatchListOpen, setIsWatchListOpen, watchlist, setWatchlist }: WatchListProps): JSX.Element => {
  const handleWatchedClick: React.MouseEventHandler<HTMLImageElement> = e => {
    const title = e.currentTarget.getAttribute('data-title');
    console.log(title);
    setWatchlist(currMovies => {
      return currMovies.filter(movie => movie.title !== title)
    })
  }
  return (
    <div className={`modal modal-bottom sm:modal-middle ${isWatchListOpen ? 'modal-open' : ''}`} role='dialog' aria-modal='true'>
      <div className='modal-box bg-base-300'>
        <div>
          {watchlist.map(movie => {
            return (
              <div key={movie.id} className="flex w-11/12 mb-2">
                <span className="font-extrabold w-11/12">{movie.title}</span>
                <span className="w-1/12"><img src="eye.svg" alt="Eye" data-title={movie.title} onClick={handleWatchedClick}/></span>
              </div>
            )
          })}
        </div>
        <div className="modal-action">
          <label className="btn btn-sm btn-circle absolute right-2 top-2" onClick={e => { setIsWatchListOpen(!isWatchListOpen) }}>X</label>
        </div>
      </div>
    </div>
  )
}

export default WatchList