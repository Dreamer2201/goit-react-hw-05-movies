import PropTypes from 'prop-types';

export default function CastList({ actorsList }) {
     const elements = actorsList.map(({ cast_id, name }) => (
        <li key={cast_id}>
            {name}
        </li>
    ));
    return (
        <div>
            <ul>
                {elements}
            </ul>
        </div>
    )
}

CastList.propTypes = {
    actorsList: PropTypes.arrayOf(
        PropTypes.shape({
            cast_id: PropTypes.number,
            name: PropTypes.string,
        })
    )
}