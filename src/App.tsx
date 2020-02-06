import React from 'react';
import logo from './logo.svg';
import './App.css';
import CraftspeopleView from "./components/CraftspeopleView";
import CraftspeopleFromGSuite from "./craftspeople_from_gsuite.json";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from "react-bootstrap";


export default function App() {
  const craftspeople = CraftspeopleFromGSuite.users;

  return (
      <Container>
        <h1>IC-163 POC</h1>
          <Row>
        <CraftspeopleView craftspeople={craftspeople} />
          </Row>
      </Container>
  );
};
