import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import MoviesList from './MoviesList';
import { fetchMovieByName } from 'components/fetch';
import Search from './Search';
import { AlertEnterQuery } from './MovieGalleryStyled';

export default function MovieGallery() {
    const [searchName, setSearchName] = useState('');
    const [movies, setMovies] = useState([]);

    const [error, setError] = useState('');
    const [page, setPage] = useState(1);

    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get('searchQuery');

//     const prevPage = usePrevious(page);
//     const prevSearchName = usePrevious(searchName);
    
    
    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const result = await fetchMovieByName(searchQuery, page);
                const items = result.results;
                console.log(items);
                if (items.length === 0) {
                    return alert("Any images not found! Try again, please.");
                }
                    setMovies((prev) => [...prev, ...items]);             
            } catch (error) {
                setError(error);
            } 
        };

        if (!searchQuery) {
            return;
        }       
        fetchMovie(searchQuery);
  
            return;
        }, [searchQuery, page]);


    const handleSubmitSearchForm = searchName => {
    setSearchParams({searchQuery: searchName});
  }

    const loadMore = () => {
        setPage((prev) => prev + 1);
    }

//     function usePrevious(value) {
//         const ref = useRef();
//         useEffect(() => {
//             ref.current = value;
//         });
//         return ref.current;
//     }

    const isMovies = Boolean(movies.length);
        return (
            <div>
                <AlertEnterQuery>Enter your query, please.</AlertEnterQuery>
                <Search onSubmit={handleSubmitSearchForm} />
                {error && <p>'Try later, please.'</p>}
                {movies && <MoviesList moviesItems={movies} />}    
                {isMovies && <button type="button" onClick={loadMore}>Load more...</button>}
            </div>
        )
    }