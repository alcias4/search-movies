


export function Movies({ movies }) {
  return (
    <ul>
      {
        movies?.map(movies => (
          <li key={movies.id}>
            <h3>{movies.title}</h3>
            <p>{movies.year}</p>
            <img src={movies.poster} alt={movies.title} />
          </li>
        ))
      }
    </ul>
  )
}