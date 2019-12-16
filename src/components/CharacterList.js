import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
    const [characters, setCharacters] = useState([])

    const setSearchResults = info => {
      const results = characters.filter(character => {
        return character.toLowerCase().includes(info.toLowerCase());
      });
  
      setSearchResults(results);
    };

    useEffect(() => {
        axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
          console.log(response.data.results);
          setCharacters(response.data.results);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }, []);
  
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

  return (
    <section className="character-list">
      <SearchForm characters={characters}
      searchResults={setSearchResults}/>
      {characters.map((card, index) => {
        return (
          <CharacterCard key={card.id} image={card.image} species={card.species} gender={card.gender} status={card.status}/>
        )
      })}
    </section>
  );
}
