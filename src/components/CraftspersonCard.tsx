import React from "react";
import {Craftsperson} from "../core/Craftsperson";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Skills from "./Skills";
import Card, {CardBody, CardText, CardTitle} from "react-bootstrap/Card";
import CardImg from "react-bootstrap/CardImg";
import {SkillLevel} from "./Badge";
import faker from "faker";

export default function CraftspersonCard(props: { craftsperson: Craftsperson }) {

    const skills = new Array(faker.random.number(10)).fill(1).map(_ =>
        faker.commerce.product());

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