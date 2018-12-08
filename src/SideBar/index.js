import React from 'react'
import styled from 'styled-components'

import Button from './Button'

const deadAliveFilters = ['All', 'Dead', 'Alive']
const genderFilters = ['Female', 'Male', 'Genderless', 'Unknown']


const SideBar = ({...props}) => (
    <div {...props}>
        <h1>Filters</h1>
        <hr />
        {deadAliveFilters.map(deathlinessState => <Button key={Math.random()}>{deathlinessState}</Button>)}
        <hr />
        {genderFilters.map(gender => <Button key={Math.random()}>{gender}</Button>)}
    </div>
)

export default SideBar