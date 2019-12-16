import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';

export default function SearchForm(props) {

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(props.characters);

  useEffect(() => {}, [searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
    };

  const handleSubmit = event => {
    event.preventDefault();
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
           return <li key={character}>{character}</li>
         })}
       </ul>
     </div>
    </section>
  );
}
