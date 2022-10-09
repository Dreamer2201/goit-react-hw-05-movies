import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchReviews } from "components/fetch";
import RewiewsList from "./ReviewsList";

export default function Reviews() {
     const [state, setState] = useState([]);
    const [error, setError] = useState('');

    const {id } = useParams();
    console.log(id);

    useEffect(() => {
        const fetchInfReviews = async () => {
            try {
                const reviews = await fetchReviews(id);
                console.log(reviews.results);
                setState(reviews.results);
            } catch(error) {
                setError(error);
            }
        } 
        fetchInfReviews();
    }, [id]);

    const isState = Boolean(state.length);
    console.log(isState);

    
    return (
        <div>
            <h2>Reviews list</h2>
            {isState ? <RewiewsList reviewsList={state} /> : <p>Any reviews. Your review can be first.</p> }
            {error && <p>Something went wrong. Try later, please.</p>}
        </div>
    )
}

