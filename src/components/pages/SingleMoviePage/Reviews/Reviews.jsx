import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchReviews } from "components/fetch";
import RewiewsList from "./ReviewsList";
import { ThreeDots } from 'react-loader-spinner';

export default function Reviews() {
    const [state, setState] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const {id } = useParams();

    useEffect(() => {
        const fetchInfReviews = async () => {
            setLoading(true);
            try {
                const reviews = await fetchReviews(id);
                setState(reviews.results);
            } catch(error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        } 
        fetchInfReviews();
    }, [id]);

    const isState = Boolean(state.length);

    return (
        <div>
            <h2>Reviews list</h2>
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
            {isState ? <RewiewsList reviewsList={state} /> : <p>Any reviews. Your review can be first.</p> }
            {error && <p>Something went wrong. Try later, please.</p>}
        </div>
    )
}

