import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import React from "react";
import Col from "react-bootstrap/Col";

export default function Skills(props: { skills: { level: string; name: string }[] }) {

    function getColorByLevel(skill: {level: string}) {
        switch(skill.level) {
            case "-1": return "red";
            case "4": return "green";
            case "2": return "yellow";
            default: return "grey";
        }
    }

    return (
    <Container>
        <Row className="justify-content-center">
            {props.skills.map(skill =>
                <Col
                     xs="auto"
                     md="6"
                     data-testid="skill"
                     style={{
                         backgroundColor: getColorByLevel(skill)
                     }}>
                    <p>{skill.name}</p>
                </Col>
            )}
        </Row>
    </Container>);
}