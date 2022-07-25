import React from 'react';
import PropTypes from 'prop-types';
import styled from "@emotion/styled";
import { useSelector, useDispatch } from 'react-redux';

import PokemonRow from './PokemonRow';

const Th = styled.th`
  text-align: left;
  font-size: x-large;
`;

const PokemonTable = () => {
    const dispatch = useDispatch();
    const pokemon = useSelector(state => state.pokemon);
    const filter = useSelector(state => state.filter);

    return (
        <table width="100%">
            <thead>
                <tr>
                    <Th>Name</Th>
                    <Th>Type</Th>
                </tr>
            </thead>
            <tbody>
                {pokemon
                .filter((pokemon) => pokemon.name.english.toLowerCase().includes(filter.toLowerCase()))
                .slice(0, 20)
                .map((pokemon) => (
                    <PokemonRow 
                    pokemon={pokemon} 
                    onSelect={(pokemon) => 
                        dispatch({
                            type: "SET_SELECTED_ITEM",
                            payload: pokemon,
                        })
                    } 
                    key={pokemon.id}/>
                ))}
            </tbody>
        </table>
    );
};

/* PokemonTable.propTypes = {
    pokemon: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.shape({
            english: PropTypes.string.isRequired,
        }),
    }),
    filter: PropTypes.string.isRequired,
    selectedItemSet: PropTypes.func.isRequired,
}; */

export default PokemonTable;