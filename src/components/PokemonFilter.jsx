import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from "@emotion/styled";

import PokemonContext from '../PokemonContext';

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
`;

const PokemonFilter = () => {
    const { 
        state: { filter },
        dispatch,
    } = useContext(PokemonContext);

    return (
        <Input 
            type="text"
            value={filter} 
            onChange={(evt) => 
                dispatch({
                    type: "SET_FILTER",
                    payload: evt.target.value,
                })
            } 
        />
    );
};

PokemonFilter.propTypes = {
    filter: PropTypes.string.isRequired,
    filterSet: PropTypes.func.isRequired,
};

export default PokemonFilter;