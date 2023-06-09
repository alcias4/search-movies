import { useEffect, useState } from "react";
import {  moviesSearch } from "../service/movies";

export function useMovies({search,check, tags, year}){
  const [movies,setMovies] = useState([]);
  const [loandig, setLoading] = useState(false)
  const [width, setWith] = useState()



  const getMovies = async ()=>{
    try{
      setLoading(true)
      const newMovies = await moviesSearch({search})
      setMovies(newMovies)
    }catch (e){
      throw new Error('no ha llegado nada')
    }finally{
      setLoading(false)
    }
  }
  
  const cambioPantalla = () =>{
    let w = window.innerWidth
    setWith(w)
    if(width <= 800 && movies.length > 0){
      getMovies()

    }
    
  }

  useEffect(()=>{
    window.addEventListener('resize', cambioPantalla)

    return ()=>{
      window.removeEventListener('resize',cambioPantalla)
    }
  })

  const sortMovies = check
  ?[...movies].sort((a,b)=>a.title.localeCompare(b.title))
  :movies


  const newPelis = tags?
  [...sortMovies].filter((e)=>{return e.type === tags}):sortMovies


  const yearPelis = year?
  [...newPelis].sort((a,b)=> a.year.localeCompare( b.year) ):
  newPelis
  





 





  return {movies: yearPelis, getMovies, loandig}
}