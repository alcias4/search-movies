export async function moviesSearch({search}) {

  const KEY = "17fabdd"


  try{
    const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${search}`)
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

