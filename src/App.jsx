import "./App.css";

import { Nav } from "./components/Nav";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { MovieDetails } from "./components/MovieDetails";
import { MoviesList } from "./components/MoviesList";

export function App() {
  return (
    <Router>
      <Nav tittle="Movies" />
      <main>
        <Routes>
          <Route exact path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/" element={<MoviesList />} />
        </Routes>
      </main>
    </Router>
  );
}
