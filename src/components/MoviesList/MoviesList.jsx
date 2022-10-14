import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import { TrendMovieList, TrendMovieListItem } from "./MoviesTrendStyled";

export default function MoviesList({ moviesItems }) {
    
    const elements = moviesItems.map(({ id, title, name }) => {
        return ((<TrendMovieListItem key={id}>
            <Link to={`/movies/${id}`}>
                <p>{title ? title : name}</p>
            </Link>
    </TrendMovieListItem>
    ))
    }
    );
    return (<TrendMovieList>{elements}</TrendMovieList>);
}

MoviesList.propTypes = {
    moviesItems: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string,
            name: PropTypes.string,
        })
    )
}