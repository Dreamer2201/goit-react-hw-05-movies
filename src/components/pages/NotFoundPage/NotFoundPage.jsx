import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div>
            <h1>Not found page</h1>
            <h2>Choose one of those pages:</h2>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/movies"}>Movies</Link>
                </li>
            </ul>
        </div>
    )
}