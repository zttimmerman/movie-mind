interface WatchListProps {
  isWatchListOpen: boolean;
  setIsWatchListOpen: React.Dispatch<React.SetStateAction<boolean>>;
  watchlist: Movie[]
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

const WatchList = ({ isWatchListOpen, setIsWatchListOpen, watchlist }: WatchListProps): JSX.Element => {
  return (
    <div className={`modal modal-bottom sm:modal-middle ${isWatchListOpen ? 'modal-open' : ''}`} role='dialog' aria-modal='true'>
      <div className='modal-box bg-base-300'>
        <div>
          {watchlist.map(movie => {
            return (
              <div key={movie.id} className="">
                <div className="font-extrabold">{movie.title}</div>
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