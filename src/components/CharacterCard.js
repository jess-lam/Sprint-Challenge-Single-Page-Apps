import React from "react";
import { Card, CardImg, CardBody, CardText, Col } from "reactstrap";
import styled from 'styled-components';



export default function CharacterCard(props) {
  return (
    <Col xs="6" sm="4">
      <Card>
        <CardImg src={props.image} alt='character'/>
        <CardBody>
          <CardText>Species: {props.species}</CardText>
          <CardText>Gender: {props.gender}</CardText>
          <CardText>Status: {props.status}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};
