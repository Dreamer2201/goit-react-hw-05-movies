import { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { fetchOneMovie } from "components/fetch";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { WrapperDetailsInfMovie } from "./SingleMovieStyled";


export default function SingleMoviePage() {
    const [state, setState] = useState(null);
    const [error, setError] = useState('');
    const [genresList, setGenresList] = useState([]);

    const {id } = useParams();
    console.log(id);

    const location = useLocation();
    console.log(location);

    const isCastPage = location.pathname.includes('cast');
    const castLink = isCastPage ? `/movies/${id}` : `/movies/${id}/cast`;

    const isReviews = location.pathname.includes('reviews');
    const reviewsLink = isReviews ? `/movies/${id}` : `/movies/${id}/reviews`;

    const navigate = useNavigate();
    const imageURL = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
        const fetchInfMovie = async () => {
            try {
                const movieDetails = await fetchOneMovie(id);
                console.log(movieDetails.genres);
                const genres = movieDetails.genres.map(({ name }) => (<p>{name}</p>));
                setState(movieDetails);
                setGenresList(genres);

            } catch(error) {
                setError(error);
            }
        } 
        fetchInfMovie();
        
    }, [id]);

    const goBackPage = () => navigate(-1);
   

    return (
        <div>
            <button type="button" onClick={goBackPage}>Go back</button>
            {state && (<>
                <WrapperDetailsInfMovie>
                    <img src={`${imageURL}${state.poster_path}`} alt={state.tagline} width='300' height='370' />
                    <div>
                        <h2>{state.title ? state.title : state.name}</h2>
                        <span>({state.release_date.substr(0, 4)})</span>
                        <h3>User score:</h3>
                        <p>{Math.round(state.vote_average * 10)} %</p>
                        <h3>Overview</h3>
                        <p>{state.overview}</p>
                        <h3>Genres</h3>
                        <p>{genresList}</p>
                    </div>
                </WrapperDetailsInfMovie>
                <h2>Additional information</h2>
                <ul>
                    <li>
                        <NavLink to={castLink}>Cast</NavLink>
                    </li>
                    <li>
                        <NavLink to={reviewsLink}>Reviews</NavLink>
                    </li>
                </ul>
                {error && <p>Something went wrong. Try later, please.</p>}
                <Outlet />
            </>)}
        </div>
    )
}