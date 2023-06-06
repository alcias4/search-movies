
import { useFilter } from "../hooks/useFilter"



export function Movies({ movies, loandign, tags}) {

  const {newMovies, handleLeft, handleRigth,activeLeft,activeRigt} = useFilter({movies, tags})

  return (
    <section className="right">
      {
        loandign ?
          <div>
            cargando...
          </div> :
          <div className="contend">
            <button style={activeLeft?{opacity:1}:{opacity:0.5}} onClick={handleLeft}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            </button>
            <ul className="contend-movies">
              {
                newMovies?.map(movies => (
                  <li key={movies.id}>
                    <img src={movies.poster} alt={movies.title} />
                    <h3>{movies.title}</h3>
                    <div className="tags">
                      <p>{movies.year}</p>
                      <p>{movies.type}</p>
                    </div>
                  </li>
                ))
              }
            </ul>
            <button style={activeRigt?{opacity:1}:{opacity:0.5}} onClick={handleRigth}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
            </button>
          </div>
      }
    </section>
  )
}