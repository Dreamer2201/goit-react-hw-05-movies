import NavBarMenu from "./NavBarMenu";
import { ConteinerNav, LogoLink } from "./NavBarStyled";

export default function Navbar() {
    return (
        <nav>
            <ConteinerNav>
                <LogoLink to="/">Logo</LogoLink>
                <NavBarMenu />
            </ConteinerNav>
        </nav>
    )
}