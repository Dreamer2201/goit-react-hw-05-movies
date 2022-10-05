import { Link } from "react-router-dom";

export default function MoviesList({ moviesItems }) {
    const elements = moviesItems.map(({ id, title, name }) => (
        <li key={id}>
            <Link to={`/movies/${id}`}>
                <p>{title ? title : name}</p>
            </Link>
        </li>
    ));
    return <ul>{elements}</ul>;
}


 // onClick={() => { onClickItem(imageUrlLarge, imageTitle) }}