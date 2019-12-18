import React from "react";
import { Card, CardImg, CardBody, CardText, Col } from "reactstrap";
import styled from 'styled-components';

const CharCard = styled.section`
display: flex;
align items: center;
flex-wrap: wrap;
justify-content: center;
border: 2px solid black;
width: 35%; 
margin-bottom: 2%;
background: gray;
`;

const CharImg = styled.img`
  width: 80%;
  opacity: 0.8;
`;

const CharBody = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
flex-wrap: wrap;
`;

const CharText = styled.h2`
font-size: 15px;
font-family: Georgia;
`;
export default function CharacterCard(props) {
  return (
    <CharCard>
        <CharImg src={props.image} alt='character'/>
        <CharBody>
          <CharText>Species: {props.species}</CharText>
          <CharText>Gender: {props.gender}</CharText>
          <CharText>Status: {props.status}</CharText>
        </CharBody>
    </CharCard>
  );
};
