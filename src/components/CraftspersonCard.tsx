import React from "react";
import {Craftsperson} from "../core/Craftsperson";
import Skills from "./Skills";
import faker from "faker";
import ProfileImage from "./ProfileImage";
import {Card, Container} from "react-bootstrap";

export default function CraftspersonCard(props: { craftsperson: Craftsperson, skills: any[] }) {



    return (
        <Card style={{
            margin: '30px',
            width: '18em'
        }}>
            <Card.Header>
                <div className="image-container">
                    <ProfileImage source={props.craftsperson.thumbnailPhotoUrl}/>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title className={"text-center"}>{props.craftsperson.name.fullName}</Card.Title>
                <Card.Text>
                    <Skills skills={props.craftsperson.skills}/>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}