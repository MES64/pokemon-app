import React from 'react';
import PropTypes from 'prop-types';
import styled from "@emotion/styled";
import { useSelector, useDispatch } from 'react-redux';

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
`;

const PokemonFilter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter);

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

/* PokemonFilter.propTypes = {
    filter: PropTypes.string.isRequired,
    filterSet: PropTypes.func.isRequired,
}; */

export default PokemonFilter;