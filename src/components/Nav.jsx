import styles from "../styles/Nav.module.css";

export function Nav({ tittle }) {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <span className={styles.title + " mb-0 h1 m-auto"}>{tittle}</span>
      </div>
    </nav>
  );
}
