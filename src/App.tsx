import React, {useState} from 'react';
import './App.css';
import CraftspeopleView from "./components/CraftspeopleView";
import CraftspeopleFromGSuite from "./craftspeople_from_gsuite.json";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from "react-bootstrap";
import TagBar from "./components/TagBar";
import faker from "faker";


export default function App() {
    faker.seed(1);
    const options = new Array(faker.random.number(100))
        .fill(1)
        .map(_ =>
            faker.random.words()
        );


    const craftspeople = CraftspeopleFromGSuite.users
        .map(c => {
            const dontCare = faker.random.number(options.length -1);
            return {...c, skills: options.slice(dontCare, dontCare + 5)}
        }
    );
    const [skills, setSkills] = useState<any[]>([]);


    return (
      <Container>
        <h1>IC-163 POC</h1>
          <h2>{skills.join(", ")}</h2>
          <Row>
              <TagBar initSkills={options} updateSkills={setSkills}/>
          </Row>
          <Row>
            <CraftspeopleView filteredSkills={skills} skills={options} craftspeople={craftspeople} />
          </Row>
      </Container>
  );
};
