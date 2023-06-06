export async function moviesSearch({search}) {
  const URL_DB = import.meta.env.VITE_URL_DBMOVIE

  const KEY = import.meta.env.VITE_KEY

  const URL = `${URL_DB}${KEY}&s=${search}`
  try{
    const res = await fetch(URL)
    const datos = await res.json()

    const movies = datos.Search

    return movies?.map((movie)=>({
      title: movie.Title,
      year:movie.Year,
      id: movie.imdbID,
      type: movie.Type,
      poster: movie.Poster
    }))

  }catch(e){
    throw new Error('Not movies')
  }
}

