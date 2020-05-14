import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';
import CharacterCard from './CharacterCard';


export default function SearchForm(props) {

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(props.characters);

  useEffect(() => {
    /*const results = props.characters.filter(character => {
      return character.toLowerCase().includes(searchTerm.toLowerCase());
    });
    
    setSearchResults(results);*/
  }, [searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
    };

  const handleSubmit = event => {
    event.preventDefault();

    const results = props.characters.filter(character => {
      return character.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    
    setSearchResults(results);
    //get searchTerm
    //get child to update parent state
    //in addition to getting setcharacters, get characters
    //get setCharacters from characterlist and filter through that info
    //call your function --> give it the filtered list 
  }
  

  return (
    <section className="search-form">
     <form onSubmit={handleSubmit}>
       <label htmlFor="name">Search:</label>
       <input id="name" type="text" name="name" placeholder="Search" onChange={handleChange}
       value={searchTerm} />
       <button type="submit">Submit</button>
     </form>
     <div>
       <ul>
         {searchResults.map(character => {
           return <li key={character.id}><CharacterCard {...character}/></li>
         })}
       </ul>
     </div>
    </section>
  );
}
