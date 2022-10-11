export default function RewiewsList({ reviewsList }) {
     const elements = reviewsList.map(({ id, content }) => (
        <li key={id}>
            {content}
        </li>
    ));
    console.log(elements);
    return (
        <div>
            <ul>
                {elements}
            </ul>
        </div>
    )
}