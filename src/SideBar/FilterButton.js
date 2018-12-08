import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    outline: none;
    background: grey;
    border-color: grey;
    border-radius: 3px;
    color: white;
    padding: 15px;
`

const FilterButton = ({value, filterCharacters, filterType, ...props}) => (
    <StyledButton onClick={e => filterCharacters(filterType, value)} {...props}>
        {value}
    </StyledButton>
)

export default FilterButton