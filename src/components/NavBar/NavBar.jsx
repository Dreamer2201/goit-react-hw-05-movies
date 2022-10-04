import { Link } from "react-router-dom";
import NavBarMenu from "./NavBarMenu";

export default function Navbar() {
    return (
        <nav>
            <div>
                <Link to="/">Logo</Link>
                <NavBarMenu />
            </div>
        </nav>
    )
}