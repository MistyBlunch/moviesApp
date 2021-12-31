import "./App.css";
import { MoviesList } from "./components/MoviesList";

import { Nav } from "./components/Nav";


export function App() {
  return (
    <div className="App">
      <Nav tittle="Movies" />
      <main>
        <MoviesList />
      </main>
    </div>
  );
}
