import { useState, useEffect, useRef } from "react";
import { TitleTrendMovies } from "./MoviesTrendStyled";
import { fetchRequest } from "components/fetch";
import MoviesList from "components/MoviesList/MoviesList";

export default function MoviesTrend() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState('');
    const [page, setPage] = useState(1);

    const isRender = useRef(true);

    useEffect(() => {
        if (isRender.current) {
            isRender.current = false;
            return;
        }

        const fetchImages = async () => {
            try {
                const result = await fetchRequest(page);
                const items = result.results;
                setMovies(prevMovies => [...prevMovies, ...items]);
            } catch (error) {
                setError(error);
            }
        };

        fetchImages(page);
    }, [page, isRender]);

    const loadMore = () => {
        setPage(prev => prev + 1);
    }

    return (
        <div>
            <TitleTrendMovies>Trending today</TitleTrendMovies>
            
            <MoviesList moviesItems={movies} />
            
            <button type="button" onClick={loadMore}>Load more...</button>
        </div>
    )
}
