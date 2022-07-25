import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const PokemonInfo = () => {
    const selectedItem = useSelector(state => state.selectedItem);

    return selectedItem ? (
        <div>
            <h1>{selectedItem.name.english}</h1>
            <table>
                <tbody>
                    {Object.keys(selectedItem.base).map((key) => (
                        <tr key={key}>
                            <td>{key}</td>
                            <td>{selectedItem.base[key]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    ) : null;
};

/* PokemonInfo.propTypes = {
    selectedItem: PropTypes.shape({
        name: PropTypes.shape({
            english: PropTypes.string.isRequired,
        }),
        base: PropTypes.shape({
            HP: PropTypes.number.isRequired,
            Attack: PropTypes.number.isRequired,
            Defense: PropTypes.number.isRequired,
            "Sp. Attack": PropTypes.number.isRequired,
            "Sp. Defense": PropTypes.number.isRequired,
            "Speed": PropTypes.number.isRequired,
        }),
    }),
}; */

export default PokemonInfo;