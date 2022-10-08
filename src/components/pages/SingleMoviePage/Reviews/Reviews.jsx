import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchReviews } from "components/fetch";
import RewiewsList from "./ReviewsList";

export default function Reviews() {
     const [state, setState] = useState(null);
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

    return (
        <div>
            <p>Reviews list</p>
            {state && <RewiewsList reviewsList={state} />}
            {error && <p>Something went wrong. Try later, please.</p>}
        </div>
    )
}

