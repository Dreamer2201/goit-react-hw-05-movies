import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchActorsMovie } from "components/fetch";
import CastList from "./Castlist";
import { ThreeDots } from 'react-loader-spinner';

export default function Cast() {
    const [state, setState] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const {id } = useParams();

    useEffect(() => {
        const fetchInfActors = async () => {
            setLoading(true);
            try {
                const movieActors = await fetchActorsMovie(id);
                setState(movieActors.cast);
            } catch(error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        } 
        fetchInfActors();
    }, [id]);

    return (
        <div>
            <h2>Actors list</h2>
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
            {state && <CastList actorsList={state} />}
            {error && <p>Something went wrong. Try later, please.</p>}
        </div>
    )
}