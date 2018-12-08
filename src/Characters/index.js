import React from 'react'
import styled from 'styled-components'

import CharacterCard from './CharacterCard'

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 80vw;
    height: 100vh;
    overflow: scroll;
    justify-content: center;
`

const CharacterList = ({characters}) => (
    <Wrapper>
        {characters.map(character =>
            <CharacterCard key={character.id} character={character} />
        )}
    </Wrapper>
)

export default CharacterList