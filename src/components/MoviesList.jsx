import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { MovieCard } from "./MovieCard";
import styles from "../styles/MoviesList.module.css";

export function MoviesList() {
  // movies, func para cambiar movies
  const [movies, setMovies] = useState([]);

  // efecto secundario que se llama despues de renderizar el componente
  useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies(data.results); 
    });
  }, []); // con el [] se ejecuta solo una vez el fetch
  return (
    <div className="container">
      <ul className={styles.moviesList}>
        {movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </ul>
    </div>
  );
}
