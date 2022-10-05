import { Link } from "react-router-dom";

export default function MovieItem({  title, name }) {
    return (<li> 
                <Link>
                    <p>{title ? title : name}</p>
                </Link>
            </li>)
}

 // onClick={() => { onClickItem(imageUrlLarge, imageTitle) }}