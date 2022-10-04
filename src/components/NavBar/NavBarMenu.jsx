import { itemsMenu } from "components/itemsMenu";
import { NavLink } from "react-router-dom";

export default function NavBarMenu() {
    const elements = itemsMenu.map(({ id, text, to }) => {
        return (<li key={id}>
            <NavLink to={to} end>{text}</NavLink>
        </li>)
    })
    return (
        <ul>{elements}</ul>
    )
}