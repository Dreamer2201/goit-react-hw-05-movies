import { itemsMenu } from "components/itemsMenu";
import { ListNavBar, ItemListNavBar, NavList } from "./NavBarStyled";


export default function NavBarMenu() {
    const elements = itemsMenu.map(({ id, text, to }) => {
        return (<ItemListNavBar  key={id}>
            <NavList to={to} end>{text}</NavList>
        </ItemListNavBar>)
    })
    return (
        <ListNavBar>{elements}</ListNavBar>
    )
}