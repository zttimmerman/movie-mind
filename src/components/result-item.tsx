interface ResultItemProps {
  movie: movieProps
}

interface movieProps {
  title: string;
  poster_path: string;
  overview: string
}

const ResultItem = ({ movie }: ResultItemProps): JSX.Element => {

  return (
    <li>
      <div>Title: {movie.title}</div>
      <div>
        <span><img src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}/></span>
        <span>{movie.overview}</span>
      </div>
    </li>
  )
}

export default ResultItem