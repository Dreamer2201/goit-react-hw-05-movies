export default function RewiewsList({ reviewsList }) {
    console.log(reviewsList)
     const elements = reviewsList.map(({ id, content }) => (
        <li key={id}>
            {content}
        </li>
    ));
    console.log(elements);
    return (
        <div>
            <p>Actors list</p>
            <ul>
                {elements}
            </ul>
        </div>
    )
}