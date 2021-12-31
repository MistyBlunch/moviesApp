const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYmM0NzljOWZmZjM0ZDNmNmVlMjIyMDMxODMwNDkzNCIsInN1YiI6IjYxY2U2OGUyYjNlNjI3MDA2YmYwZGIyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0YJKrOZUcP88ZIvWRFY326i0wnAKaz8Al7tu2L3Gt_o",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
