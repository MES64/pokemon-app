import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import PokemonContext from '../PokemonContext';

const PokemonInfo = () => {
    const { selectedItem } = useContext(PokemonContext);

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

PokemonInfo.propTypes = {
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
};

export default PokemonInfo;