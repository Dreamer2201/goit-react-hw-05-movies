import { useState } from "react";
import { useParams, useNavigate, useLocation, NavLink, Outlet } from "react-router-dom";
import { fetchOneMovie } from "components/fetch";
import { useEffect } from "react";
import { ThreeDots } from 'react-loader-spinner';
import { WrapperDetailsInfMovie } from "./SingleMovieStyled";
import { BtnGoBack, ContainerInfMovie, YearReleseMovie, TitleHeadDetails, TitleWrapper, GenresWrapper, GenreName  } from "./SingleMovieStyled";

export default function SingleMoviePage() {
    const [state, setState] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [genresList, setGenresList] = useState([]);

    const { id } = useParams();
    const location = useLocation();
   
    const isCastPage = location.pathname.includes('cast');
    const castLink = isCastPage ? `/movies/${id}` : `/movies/${id}/cast`;
    const isReviews = location.pathname.includes('reviews');
    const reviewsLink = isReviews ? `/movies/${id}` : `/movies/${id}/reviews`;

    const navigate = useNavigate('/');
    const imageURL = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
        const fetchInfMovie = async () => {
            setLoading(true);
            try {
                const movieDetails = await fetchOneMovie(id);
                const genres = movieDetails.genres.map(({ name, id }) => (<GenreName key={id}>{name}</GenreName>));
                setState(movieDetails);
                setGenresList(genres);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchInfMovie();  
    }, [id]);

    const goBackHomePage = () => navigate('/');
    const goBackMoviesPage = () => navigate('/movies');

    return (
        <div>
            <BtnGoBack type="button" onClick={goBackHomePage}>Go back HOME</BtnGoBack>
            <BtnGoBack type="button" onClick={goBackMoviesPage}>Go back to MOVIES</BtnGoBack>
             {loading &&    <ThreeDots 
                                height="80" 
                                width="80" 
                                radius="9"
                                color="#4fa94d" 
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{}}
                                wrapperClassName=""
                                visible={true}
                            />}
            {error && <p>Something went wrong. Try later, please.</p>}
            {state && (<>
                <WrapperDetailsInfMovie>
                    <img src={`${imageURL}${state.poster_path}`} alt={state.tagline} width='300' height='370' />
                    <ContainerInfMovie>
                        <TitleWrapper>
                            <h2>{state.title ? state.title : state.name}</h2>
                            <YearReleseMovie>({state.release_date.substr(0, 4)})</YearReleseMovie>
                        </TitleWrapper>
                        <TitleHeadDetails>User score:</TitleHeadDetails>
                        <p>{Math.round(state.vote_average * 10)} %</p>
                        <TitleHeadDetails>Overview</TitleHeadDetails>
                        <p>{state.overview}</p>
                        <TitleHeadDetails>Genres</TitleHeadDetails>
                        <GenresWrapper>{genresList}</GenresWrapper>
                    </ContainerInfMovie>
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
                <Outlet />
            </>)}
        </div>
    )
}