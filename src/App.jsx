
import { useMovies } from './hooks/useMovies'
import { Movies } from './componets/movies'
import './App.css'
import { useSearch } from './hooks/useSearch'

function App() {
  const { search, setSearch, error } = useSearch()
  const { movies, getMovies,loandig } = useMovies({ search })


  const handleSumbmit = (e) => {
    e.preventDefault()
    getMovies()
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  return (
    <>
      <div className='home'>
        <header>
          <h1>Pelicuas y series busacador</h1>
          <form onSubmit={handleSumbmit}>
            <input type="text" placeholder='pelicuas,series...' name='query' onChange={handleChange} value={search} />
            <button type='submit'>Buscar</button>
          </form>
          {
            error && <p>{error}</p>
          }
        </header>
        <main>
          {
            loandig? <p>cargando...</p>: <Movies  movies={movies}/>
          }
        </main>
      </div>
    </>
  )
}

export default App
