import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchOneMovie } from "components/fetch";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function SingleMoviePage() {
    const [state, setState] = useState(null);
    const [error, setError] = useState('');

    const {id } = useParams();
    console.log(id);

    const navigate = useNavigate();

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

    const goBackPage = () => navigate("/movies");

    return (
        <div>
            <button type="button" onClick={goBackPage}>Go back to movies list</button>
            {state && (<>
                <h2>{state.title ? state.title : state.name}</h2>
                <p>{state.overview && state.overview}</p>
                <p>{state.vote_average}</p>
                <ul>
                    <li>
                        <NavLink to={'cast'}>Cast</NavLink>
                    </li>
                    <li>
                        <NavLink to={'reviews'}>Reviews</NavLink>
                    </li>
                </ul>
                <Outlet />
            </>)}
        </div>
    )
}