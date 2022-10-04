import { nanoid } from 'nanoid';

export const itemsMenu = [
    {
        text: "Home",
        id: nanoid(),
        to: "/"
    },
    {
        text: "Movies",
        id: nanoid(),
        to: "/movies"
    }

]