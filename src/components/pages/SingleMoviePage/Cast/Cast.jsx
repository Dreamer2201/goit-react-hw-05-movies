import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchActorsMovie } from "components/fetch";
import CastList from "./Castlist";

export default function Cast() {
    const [state, setState] = useState(null);
    const [error, setError] = useState('');

    const {id } = useParams();
    console.log(id);

    useEffect(() => {
        const fetchInfActors = async () => {
            try {
                const movieActors = await fetchActorsMovie(id);
                console.log(movieActors.cast);
                setState(movieActors.cast);
            } catch(error) {
                setError(error);
            }
        } 
        fetchInfActors();
    }, [id]);

   
    return (
        <div>
            <p>Actors list</p>
            {state && <CastList actorsList={state} />}
            {error && <p>Something went wrong. Try later, please.</p>}
        </div>
    )
}