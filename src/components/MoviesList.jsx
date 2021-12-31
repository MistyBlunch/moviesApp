import movies from "../data/movies";
import { MovieCard } from "./MovieCard";
import styles from "../styles/MoviesList.module.css";

export function MoviesList() {
  return (
    <div className="container">
      <ul className={styles.moviesList}>
        {movies.map((movie) => {
          return (
            <MovieCard key={movie.id} movie={movie} />
          )
        })}
      </ul>
    </div>
  );
}
