import { Link } from "react-router-dom";

import { TrendMovieList, TrendMovieListItem } from "./MoviesTrendStyled";

export default function MoviesList({ moviesItems }) {
    console.log(moviesItems);
    
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
