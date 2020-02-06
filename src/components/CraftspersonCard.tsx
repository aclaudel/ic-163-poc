import React from "react";
import {Craftsperson} from "../core/Craftsperson";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Skills from "./Skills";
import Card, {CardBody, CardText, CardTitle} from "react-bootstrap/Card";
import CardImg from "react-bootstrap/CardImg";

export default function CraftspersonCard(props: { craftsperson: Craftsperson }) {
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
        <Card style={{
            margin: '30px',
            width: '18em'
        }}>
            <Card.Img
                variant="top"
                className="rounded-circle"
                src={props.craftsperson.thumbnailPhotoUrl}
                style={{
                    width: '50%',
                    margin: '40px auto 0 auto'
                }}
            />
            <Card.Body>
                <Card.Title className={"text-center"}>{props.craftsperson.name.fullName}</Card.Title>
                <Card.Text>
                    <Skills skills={skills}/>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}