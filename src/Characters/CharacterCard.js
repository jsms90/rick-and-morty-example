import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    margin: 10px;
    text-align: center;
`

const Image = styled.img`
    border-radius: 50%;
    box-shadow: 4px -1px 20px -5px #000;
`

const BigParagraph = styled.p`
    font-size: 20px;
    font-weight: bold;
`

const CharacterCard = ({character}) => (
    <Wrapper>
        <Image src={character.image} />
        <BigParagraph>{character.name}</BigParagraph>
    </Wrapper>
)

export default CharacterCard