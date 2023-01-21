import { useParams } from "react-router-dom";
import useRequestedData from "../hooks/useRequestedData";
const MovieDetails = () => {

  const { id } = useParams()
    const { data, isLoading } = useRequestedData('/') 
 
    return(
        <div>
            {isLoading ? (<p>Carregando..</p>) :
            data?.items
            ?.filter((movies) => {
              return movies.id.includes(id);
            })
            .map((movie) => (
              <div
                key={movie.id}
              >
                <img src={movie.image} alt={movie.fullTitle} width="200px"/>
                <h3>{movie.title}</h3>
                <p>Year: {movie.year}</p>
                <p>Cast: {movie.crew}</p>
                <p>Ranking: {movie.rank}</p>
                <p>IMDB Rating: {movie.imDbRating}</p>

              </div>
            ))}
        

        </div>
    ) 
}

export default MovieDetails