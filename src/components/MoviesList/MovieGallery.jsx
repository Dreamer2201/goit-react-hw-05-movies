import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import MoviesList from './MoviesList';
import { fetchMovieByName } from 'components/fetch';
import Search from './Search';
import { AlertEnterQuery } from './MovieGalleryStyled';
import { BtnLoadMoreMovies } from './MoviesTrendStyled';
import { ThreeDots } from 'react-loader-spinner';

export default function MovieGallery() {
    // const [searchName, setSearchName] = useState('');
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [page, setPage] = useState(1);

    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get('searchQuery');
 
    const prevPage = usePrevious(page);
    const prevSearchName = usePrevious(searchQuery);

    useEffect(() => {
        const fetchMovie = async () => {
            setLoading(true);
            try {
                const result = await fetchMovieByName(searchQuery, page);
                const items = result.results;
                console.log(items);
                if (items.length === 0) {
                    return alert("Any images not found! Try again, please.");
                } if (page === 1) {
                    setMovies([...items]);
                } else {
                    setMovies((prev) => [...prev, ...items]);
                }    
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        if (!searchQuery) {
            return;
        }       
        if (page > prevPage) {
            fetchMovie(searchQuery, page);
            return;
        }
        if ((prevSearchName !== searchQuery) && page === prevPage) {
            fetchMovie(searchQuery, 1);
            resetPage();
            return;
        }
        }, [searchQuery, page, prevPage, prevSearchName]);
    
    const resetPage = () => {
        setPage(1);
    }


    const handleSubmitSearchForm = searchName => {
        setSearchParams({ searchQuery: searchName });
    };

    const loadMore = () => {
        setPage((prev) => prev + 1);
    };

    function usePrevious(value) {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        });
        return ref.current;
    };

    const isMovies = Boolean(movies.length);
        return (
            <div>
                <AlertEnterQuery>Enter your query, please.</AlertEnterQuery>
                <Search onSubmit={handleSubmitSearchForm} />
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
                {error && <p>'Try later, please.'</p>}
                {movies && <MoviesList moviesItems={movies} />}    
                {isMovies && <BtnLoadMoreMovies type="button" onClick={loadMore}>Load more...</BtnLoadMoreMovies>}
            </div>
        )
    }