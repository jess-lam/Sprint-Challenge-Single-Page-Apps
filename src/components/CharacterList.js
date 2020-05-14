import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import { Container, Row } from 'reactstrap'

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
          console.log(response.data.results);
          setCharacters(response.data.results);
          console.log(characters);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }, []);

    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

  return (
    <Container>
      <Row>
        <section className="character-list">
        <SearchForm characters={characters} searchResults={props.setSearchResults}/>
        {characters.map((card, index) => {
          return (
            <CharacterCard key={card.id} image={card.image} species={card.species} gender={card.gender} status={card.status}/>
          )
        })}
    </section>
      </Row>
    </Container>
  );
}
