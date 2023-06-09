
import { useMovies } from './hooks/useMovies'
import { Movies } from './componets/movies'
import { Navigator } from './componets/nav'
import './App.css'
import { useSearch } from './hooks/useSearch'
import { useStyle } from './hooks/useStyle'
import { useState } from 'react'

function App() {
  const [year, setYear] = useState(false)
  const [check, setchek] = useState(false)
  const [tags, setTags] = useState(null)
  const { search, setSearch, error } = useSearch()
  const { movies, getMovies, loandig } = useMovies({ search,check, tags, year })
  const {color} = useStyle({tags})


  const yearFun = () =>{
    if(movies.length !== 0){
      setYear(!year)
      setchek(false)
    }
    if(movies.length === 0){
      alert('First you have to search for a movie')
    }

  }


  const checkFun= ()=>{
    if(movies.length !== 0){
      setchek(!check)
      setYear(false)
    }
    if(movies.length === 0){
      alert('First you have to search for a movie')
    }
    
  }

  const handleSumbmit = () => {
    if(tags === null){
      setTags('')
    }
    getMovies()
  }


  const tagsFun = (e) =>{

    setTags(e)
    
  }






  const handleChange = (e) => {

    let data = e.target.value
    setSearch(data)
  
  }




  return (
    <>
      <div className='home'>
        <header>
          <h1>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
            </svg>
           Movie
          </h1>
          <section>
            <strong className={tags==''? color: null}>All</strong>
            <strong className={tags=="movie"? color: null}>Movies</strong>
            <strong className={tags=="series"? color: null}>Series</strong>
          </section>
        </header>
        <main>
          <Navigator year={year} yearFun={yearFun} tagsFun={tagsFun}  check={check} checkFun={checkFun} tags={tags} handleSumbmit={handleSumbmit} handleChange={handleChange} search={search} error={error} />
          <Movies  check={check} tags={tags} movies={movies} loandig={loandig} />
        </main>
      </div>
    </>
  )
}

export default App
