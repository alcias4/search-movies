import { useState } from "react";
import {  moviesSearch } from "../service/movies";

export function useMovies({search}){
  const [movies,setMovies] = useState([]);
  const [loandig, setLoading] = useState(false)
  
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

  return {movies, getMovies, loandig}
}