import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import React from "react";
import Badge from "./Badge";

export default function Skills(props: { skills?: any[] }) {
    const skills2 = props.skills ? props.skills : [];
    return (
    <Container className={"fluid"}>
        <Row className="justify-content-center">
            {skills2.map(skill =>
                <Badge skill={skill}/>
            )}
        </Row>
    </Container>);
}