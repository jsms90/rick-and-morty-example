import React from 'react'
import styled from 'styled-components'

import FilterButton from './FilterButton'

const BigWrapper = styled.div`
    margin: 30px;
    margin-top: 0;
    text-align: center;
`

const Wrapper = styled.div`
    margin: 20px;
    padding: 10px;
`

const filterTypes = {
    status: ['All', 'Dead', 'Alive'],
    gender: ['Female', 'Male', 'Genderless', 'Unknown']
}


const SideBar = ({filterCharacters, ...props}) => {
    return (
    <BigWrapper {...props}>
    {Object.keys(filterTypes).map(filterType => {
        return (<Wrapper>
        {filterTypes[filterType].map((value, index) => {
            return (
                <FilterButton key={index} filterType={filterType} filterCharacters={filterCharacters} value={value}/>
            )
        })}
        </Wrapper>)
    })}
    </BigWrapper>
)
}

export default SideBar