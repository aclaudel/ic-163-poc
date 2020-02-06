import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import React from "react";
import Col from "react-bootstrap/Col";
import Badge, {SkillLevel} from "./Badge";

export default function Skills(props: { skills: string[] }) {

    return (
    <Container className={"fluid"}>
        <Row className="justify-content-center">
            {props.skills.map(skill =>
                <Badge skill={skill}/>
            )}
        </Row>
    </Container>);
}