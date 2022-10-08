
export default function CastList({ actorsList }) {
    console.log(actorsList)
     const elements = actorsList.map(({ cast_id, name }) => (
        <li key={cast_id}>
            {name}
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