interface ResultItemProps {
  movie: movieProps
}

interface movieProps {
  title: string;
  poster_path: string;
  overview: string
  release_date: string
}

const ResultItem = ({ movie }: ResultItemProps): JSX.Element => {

  return (
    <li>
      {/* <div className="card w-80 bg-base-300 shadow-xl">
        <figure><img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="Poster" /></figure>
        <div className="card-body">
          <div className='flex justify-between w-full'>
            <h2 className="card-title font-extrabold">{movie.title}</h2>
            <span><p>{movie.release_date.slice(0, 4)}</p></span>
          </div>
          <p className='h-40 overflow-y-auto'>{movie.overview}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary mt-2">+</button>
          </div>
        </div>
      </div> */}
      <div className="card card-side bg-base-200 shadow-xl w-11/12 m-auto">
        <figure className="w-6/12"><img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="Movie"/></figure>
        <div className="card-body">
          <div className='flex justify-between w-full'>
              <h2 className="card-title font-extrabold">{movie.title}</h2>
              <span><p>{movie.release_date.slice(0, 4)}</p></span>
            </div>
            {/* <p className=''>{movie.overview}</p> */}
            <p>Test</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">+ Watchlist</button>
            </div>
          </div>
      </div>
    </li>
  )
}

export default ResultItem