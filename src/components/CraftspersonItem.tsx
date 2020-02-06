import React from "react";
import {Craftsperson} from "../core/Craftsperson";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Skills from "./Skills";

export default function CraftspersonItem(props: { craftsperson: Craftsperson }) {
    function skill(name: string, level: string) {
        return {name: name, level: level};
    }

    const skills = [
      skill("java", "4"),
      skill("UI design", "-1"),
      skill("python", "1"),
      skill("typescript", "2"),
      skill("React", "2"),
    ];

    return (
        <Container data-testid="craftsperson-item">
            <Row className="justify-content-center">
                <Image className="rounded-circle" src={props.craftsperson.thumbnailPhotoUrl}/>
            </Row>
            <Row>
                <Col sm={6} className="text-center">
                    <p>{props.craftsperson.name.fullName}</p>
                </Col>
                <Col sm={6} className="text-center">
                    {props.craftsperson.primaryEmail}
                </Col>
                <Col>
                    <Skills skills={skills} />
                </Col>
            </Row>
        </Container>
    );
}