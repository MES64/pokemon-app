import React from 'react';
import styled from "@emotion/styled";
import { observer } from 'mobx-react';

import store from '../store';

import PokemonRow from './PokemonRow';

const Th = styled.th`
  text-align: left;
  font-size: x-large;
`;

const PokemonTable = () => (
    <table width="100%">
        <thead>
            <tr>
                <Th>Name</Th>
                <Th>Type</Th>
            </tr>
        </thead>
        <tbody>
            {store.filteredPokemon
            .slice(0, 20)
            .map((pokemon) => (
                <PokemonRow 
                pokemon={pokemon} 
                onSelect={(pokemon) => store.setSelectedItem(pokemon)}
                key={pokemon.id}
                />
            ))}
        </tbody>
    </table>
);

export default observer(PokemonTable);