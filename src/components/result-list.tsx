import ResultItem from './result-item'

interface ResultListProps {
  movies: any[]
}

const ResultList = ({ movies }: ResultListProps): JSX.Element => {

  return (
    <ul className=''>
      {movies.map(movie => {
        return <ResultItem key={movie.id} movie={movie}/>
      })}
    </ul>
  )
}

export default ResultList