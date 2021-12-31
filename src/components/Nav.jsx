import { Link } from "react-router-dom";
import styles from "../styles/Nav.module.css";

export function Nav({ tittle }) {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <span className={styles.title + " mb-0 h1 m-auto"}>
          <Link to="/" className="text-white text-decoration-none">{tittle}</Link>
        </span>
      </div>
    </nav>
  );
}
