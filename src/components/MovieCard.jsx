import { Link } from "react-router-dom";
import styles from "../styles/MovieCard.module.css";

export function MovieCard({ movie }) {
  const imgUrl = "http://image.tmdb.org/t/p/w300" + movie.poster_path;
  
  return (
    <li className={styles.movieCard}>
      <Link to={"/movies/" + movie.id}>
        <img
          width={230}
          height={345}
          className={styles.movieImage}
          src={imgUrl}
          alt={movie.title}
        />
        <div className={styles.cardTitle}>{movie.title}</div>
      </Link>
    </li>
  );
}
