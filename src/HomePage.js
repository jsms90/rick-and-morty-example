import React from 'react'
import styled from 'styled-components'

import SideBar from './SideBar/'
import CharacterList from './Characters/'

const Wrapper = styled.div`
  display: flex;
`

const StyledSideBar = styled(SideBar)`
  width: 20vw;
  height: 100vh;
  min-width: 300px;
  height: 100vh;
  box-shadow: 18px 1px 45px -20px rgba(0, 0, 0, 0.6);
  color: white;
`

const StyledCharacterList = styled(CharacterList)`
  width: 80vw;
  height: 100px;
  overflow: scroll;
  box-shadow: 18px 1px 45px -20px rgba(0, 0, 0, 0.6);
  color: white;
`

class Bob extends React.Component {
    state = {
        filteredCharacters: [],
        isFiltered: false
    }

    // life cycle contains this.setState({characters: prevState.characters.filter()})

    filterCharacters = (filterType, value) => {
        if (value === 'All') {
            this.setState({isFiltered: false})
        }
        else {
            const filteredCharacters = this.props.characters.filter(char => {
                return char[filterType] === value
            })
            console.log('filteredChars', filteredCharacters)
            this.setState({filteredCharacters: filteredCharacters, isFiltered: true })
        }
    }

    render() {
        const {filteredCharacters, isFiltered } = this.state
        const {characters} = this.props
        console.log(filteredCharacters, isFiltered)
        
        return (
            <Wrapper>
                <StyledSideBar filterCharacters={this.filterCharacters}/>
                <StyledCharacterList characters={isFiltered ? filteredCharacters: characters} />
            </Wrapper>
        )
    }
}

export default Bob