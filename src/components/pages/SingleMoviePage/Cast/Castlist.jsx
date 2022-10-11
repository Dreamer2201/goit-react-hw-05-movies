
export default function CastList({ actorsList }) {
     const elements = actorsList.map(({ cast_id, name }) => (
        <li key={cast_id}>
            {name}
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