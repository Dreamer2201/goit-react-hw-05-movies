import { useState, useEffect, useRef } from 'react';
import MoviesList from './MoviesList';
import { fetchMovieByName } from 'components/fetch';
import Search from './Search';

export default function MovieGallery() {
    const [searchName, setSearchName] = useState('');
    const [movies, setMovies] = useState([]);

    const [error, setError] = useState('');
    const [page, setPage] = useState(1);

//     const prevPage = usePrevious(page);
//     const prevSearchName = usePrevious(searchName);
    
    
    useEffect(() => {

        const fetchMovie = async () => {

            try {
                const result = await fetchMovieByName(searchName, page);
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

        if (!searchName) {
            return;
        }       
        fetchMovie(searchName);
  
            return;
        }, [searchName, page]);


    const handleSubmitSearchForm = searchName => {
    setSearchName(searchName);
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
                Search Movie Gallery By Name
                <Search onSubmit={handleSubmitSearchForm} />
                {error && <p>'Try later, please.'</p>}
                {movies && <MoviesList moviesItems={movies} />}    
                {isMovies && <button type="button" onClick={loadMore}>Load more...</button>}
            </div>
        )
    }