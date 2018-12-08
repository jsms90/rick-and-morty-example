import React, { Component } from 'react';
import styled from 'styled-components'
import gql from 'graphql-tag';
import ApolloClient from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";
import fetch from 'node-fetch'

import HomePage from './HomePage'
import SideBar from './SideBar/'
import CharacterList from './Characters/'

const Wrapper = styled.div`
  display: flex;

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

const StyledSideBar = styled(SideBar)`
  width: 20vw;
  height: 100vh;
  min-width: 300px;
  height: 100vh;
  box-shadow: 18px 1px 45px -20px rgba(0, 0, 0, 0.6);
  background-color: grey;
  color: white;
`

const StyledCharacterList = styled(CharacterList)`
  width: 80vw;
  height: 100px;
  overflow: scroll;
  box-shadow: 18px 1px 45px -20px rgba(0, 0, 0, 0.6);
  background-color: grey;
  color: white;
`

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql" // example: https://api.github.com/graphql
});

const CHARACTERS_QUERY = gql`
  query {
    characters {
      info {
        count
      }
      results {
        id
        name
        status
        species
        type
        gender
        origin {
          name
        }
        location {
          name
        }
        image
        type      
      }
    }
  }
`

class App extends React.Component {
  
  render () {
    return (
      <ApolloProvider client={client}>
        <Query query={CHARACTERS_QUERY}>
        {({loading, error, data}) => {
          if (loading) return 'loading...'
          if (error) return `Error! ${error.message}`
          return <HomePage characters={data.characters.results}/>
        }}
        </Query>
      </ApolloProvider>
    )
}
};

export default App;
