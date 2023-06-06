import { useEffect, useRef, useState } from "react";

export function useSearch() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const firts = useRef(true);
  useEffect(() => {
    if (firts.current) {
      firts.current = search === "";
      return;
    }

    if (search === "") {
      setError("No se puede buscar vacio");
      return;
    }

    if (search.match(/^\d+$/)) {
      setError("no se puede buscar la pelicula con un numero");
      return;
    }

    if (search.length < 3) {
      setError("Tiene que se mayor a tres caracters");
      return;
    }

    

    setError(null);
  }, [search]);
  return { search, setSearch, error };
}
