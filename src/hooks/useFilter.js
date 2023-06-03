import { useState, useEffect } from "react"

export function useFilter({movies, tags}){
  const [newMovies, setNewMovies] = useState([])
  const [intervals, setInterval] = useState({ start: 0, final: 6 })
  const [total, setTolta] = useState([]);
  const [activeLeft, setActiveLeft] = useState(false)
  const [activeRigt, setActiveRigth] = useState(false)



  useEffect(() => {
    if(newMovies === []){
      setActiveRigth(true)
    }

    if(tags !== '') {
      let { start, final } = { ...intervals }
      start = 0
      final = 6
      setInterval({start, final})
      const newPelis = movies.filter((e)=>{
        return e.type === tags;
      })
      setTolta(newPelis)
      setNewMovies(newPelis.slice(intervals.start, intervals.final))
      return
    }
    setNewMovies(movies.slice(intervals.start, intervals.final))
  }, [movies])

  const handleLeft = () => {

    let { start, final } = { ...intervals }
    if (start === 0 && final === 6) {
      return setActiveLeft(false)
    }
    start = start - 6;
    final = final - 6
    const masPelis = movies.slice(start, final)
    setInterval({ start, final })
    setNewMovies(masPelis)
  }

  const handleRigth = () => {
    let { start, final } = { ...intervals }
    setActiveLeft(true)
    setActiveRigth(true)
    if(tags !== '' && total !== []){
      if(total.length <= final ) return setActiveRigth(false)
      start = start + 6;
      final = final + 6
      setInterval({ start, final })
      const masPelis = total.slice(start, final)
      setNewMovies(masPelis)
      return
    }
    start = start + 6;
    final = final + 6
    if (movies.length <= start) return setActiveRigth(false)
    setInterval({ start, final })
    const masPelis = movies.slice(start, final)
    setNewMovies(masPelis)

  }

  return {newMovies, handleLeft, handleRigth, activeLeft, activeRigt}
}