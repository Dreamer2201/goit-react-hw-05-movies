import PropTypes from 'prop-types';

export default function RewiewsList({ reviewsList }) {
     const elements = reviewsList.map(({ id, content }) => (
        <li key={id}>
            {content}
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

RewiewsList.propTypes = {
    reviewsList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            content: PropTypes.string,
        })
    )
}