import { useState, useEffect } from "react";
import { TitleTrendMovies, BtnLoadMoreMovies } from "./MoviesTrendStyled";
import { fetchRequest } from "components/fetch";
import MoviesList from "components/MoviesList/MoviesList";
import { ThreeDots } from 'react-loader-spinner';

export default function MoviesTrend() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchImages = async () => {
            setLoading(true);
            try {
                const result = await fetchRequest(page);
                const items = result.results;

                setMovies(prevMovies => { 
                    if (page === 1) {
                        return [...items];
                    } else {
                        const prevMovieId = prevMovies.map(({ id }) => id);
                        const newMovieIds = items.map(({ id }) => id);
                        const newArrId = newMovieIds.reduce((newArr, movieId) => {
                            if (prevMovieId.includes(movieId)) {
                                return newArr;
                            } newArr.push(movieId);
                            return newArr;
                        }, []);

                        const filteredNewMovies = items.reduce((newArrItems, item) => {
                            if (newArrId.includes(item.id)) {
                                newArrItems.push(item);
                                return newArrItems;
                            } return newArrItems;
                        }, []);
                       
                        return [...prevMovies, ...filteredNewMovies];
                    }
                });
                
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchImages(page);
    }, [page]);

    const loadMore = () => {
        setPage(prev => prev + 1);
    }

    return (
        <div>
            <TitleTrendMovies>Trending today</TitleTrendMovies>
            {loading ? <ThreeDots 
                                height="80" 
                                width="80" 
                                radius="9"
                                color="#4fa94d" 
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{}}
                                wrapperClassName=""
                                visible={true}
                                /> : <p></p>}
            <MoviesList moviesItems={movies} />
            {error && <p>Something went wrong. Try later, please.</p>}
            {MoviesList && <BtnLoadMoreMovies type="button" onClick={loadMore}>Load more...</BtnLoadMoreMovies>}
        </div>
    )
}
