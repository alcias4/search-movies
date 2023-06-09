import { useState, useEffect } from "react"

export function useFilter({movies, tags}){
  const [newMovies, setNewMovies] = useState([])
  const [intervals, setInterval] = useState({start:0,final:6})
  const [activeLeft, setActiveLeft] = useState(false)
  const [activeRigt, setActiveRigth] = useState(false)
  const [x,setx] = useState(()=>{
    const x = window.matchMedia("(max-width: 800px)")
    return x
  })


  useEffect(() => {
    let x = window.matchMedia("(max-width: 800px)")
    setx(x)
    if(newMovies === []){
      setActiveRigth(true)
    }

    if(x.matches){
      setInterval({start:0, final:4})
    }else{
      setInterval({start:0, final:6})
    }

    if(movies === undefined || newMovies === undefined) return 
    setNewMovies(movies.slice(intervals.start, intervals.final))
  }, [movies])

  const handleLeft = () => {

    let { start, final } = { ...intervals }
    if ((start === 0 && final === 6) || (start === 0 && final === 4)  ) {
      const f = false
      return setActiveLeft(f)
    }
    if(x.matches){
      start = start - 4;
      final = final - 4
    }else{
      start = start - 6;
      final = final - 6
    }
    const masPelis = movies.slice(start, final)
    setInterval({ start, final })
    setNewMovies(masPelis)
  }

  const handleRigth = () => {
    const b = true
    let { start, final } = { ...intervals }
    setActiveLeft(b)
    setActiveRigth(b)
    if(x.matches){
      start = start + 4;
      final = final + 4
    }else{
      start = start + 6;
      final = final + 6
    }
    if (movies.length <= start) return setActiveRigth(false)
    setInterval({ start, final })
    const masPelis = movies.slice(start, final)
    setNewMovies(masPelis)

  }

  return {newMovies, handleLeft, handleRigth, activeLeft, activeRigt}
}