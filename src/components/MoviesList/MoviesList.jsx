import { useState, useEffect } from "react";

import fetchRequest from "components/fetch";
import MovieItem from "./MovieItem";


export default function MoviesList({ items }) {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState('');
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchImages = async (page) => {
            try {
                const result = await fetchRequest(page);
                const items = result.results;
                console.log(result);
                console.log(items);
                if (items.length === 0) {
                    return alert("Any images not found! Try again, please.");
                }
                setMovies(prev => [...prev, ...items]);
            } catch (error) {
                setError(error);
            }
        };
        fetchImages(page);
}, [page]);

    const loadMore = () => {
        setPage(prev => prev + 1);
    }
    return (
        <div>
            <h2>Trending today</h2>
            <ul>
            {movies.map(item => (
                <MovieItem key={item.id}
                    title={item.title}
                    name={item.name}
                // onClickItem={onClick}
                />
            ))}
            </ul>
            <button type="button" onClick={loadMore}>Load more...</button>
        </div>
    )
}
