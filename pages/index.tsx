import { useEffect, useState } from "react";
import Seo from "../components/Seo";

const API_KEY = "6725650d4790dfee5aff087618cb4a61";

interface IMovie {
  id: number;
  original_title: string;
}

export default function Home() {
  const [movies, setMovies] = useState<IMovie[] | []>([]);
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      setMovies(results);
    })();
  }, []);
  console.log(movies);

  return (
    <div>
      <Seo title="Home" />
      {!movies && <h4>Loading...</h4>}
      {movies.map((moive) => {
        return (
          <div key={moive.id}>
            <h4>{moive.original_title}</h4>
          </div>
        );
      })}
    </div>
  );
}
