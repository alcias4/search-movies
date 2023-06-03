
import { useMovies } from './hooks/useMovies'
import { Movies } from './componets/movies'
import { Navigator } from './componets/nav'
import './App.css'
import { useSearch } from './hooks/useSearch'
import { useState } from 'react'

function App() {
  const { search, setSearch, error } = useSearch()
  const { movies, getMovies, loandig } = useMovies({ search })
  const [tags, setTags] = useState('')

  const handleSumbmit = (tag) => {
    getMovies()
    setTags(tag)

  }


  const handleChange = (e) => {
    setSearch(e.target.value)
  }



  return (
    <>
      <div className='home'>
        <header>
          <h1>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
            </svg>
            GamyMovie
          </h1>
          <section>
            hola
          </section>
        </header>
        <main>
          <Navigator handleSumbmit={handleSumbmit} handleChange={handleChange} search={search} error={error} />
          <Movies tags={tags} movies={movies} loandig={loandig} />
        </main>
      </div>
    </>
  )
}

export default App
