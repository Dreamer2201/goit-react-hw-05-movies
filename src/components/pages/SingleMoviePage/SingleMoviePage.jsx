import { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchOneMovie } from "components/fetch";
import { useEffect } from "react";

export default function SingleMoviePage() {
    const [state, setState] = useState(null);
    const [error, setError] = useState('');

    const {id } = useParams();
    console.log(id);

    useEffect(() => {
        const fetchInfMovie = async () => {
            try {
                const movieDetails = await fetchOneMovie(id);
                console.log(movieDetails);
                setState(movieDetails);
            } catch(error) {
                setError(error);
            }
        } 
        fetchInfMovie();
    }, [id]);

    return (
        <div>
            {state && (<>
                <img src={state.backdrop_path} width='100' height='100' />
                <h2>{state.title ? state.title : state.name}</h2>
                <p>{state.overview && state.overview}</p>
                <p>{state.vote_average}</p>
      
            </>)}
        </div>
    )
}