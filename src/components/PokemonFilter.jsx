import React from 'react';
import PropTypes from 'prop-types';
import styled from "@emotion/styled";

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
`;

const PokemonFilter = ({ filter, filterSet }) => (
    <Input 
    type="text"
    value={filter} 
    onChange={(evt) => filterSet(evt.target.value)} 
    />
)

PokemonFilter.propTypes = {
    filter: PropTypes.string.isRequired,
    filterSet: PropTypes.func.isRequired,
};

export default PokemonFilter;