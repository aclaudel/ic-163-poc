import React from "react";
import {Craftspeople} from "../core/Craftspeople";
import CraftspersonCard from "./CraftspersonCard";
import Col from "react-bootstrap/Col";
import {CardGroup, Container, Row} from "react-bootstrap";

export default function CraftspeopleView(props: { craftspeople: Craftspeople }) {
    return (
        <Container data-testid="craftspeople-view">
            <CardGroup className="">
                {props.craftspeople.map(craftsperson =>
                    <Row>
                        <CraftspersonCard craftsperson={craftsperson} />
                    </Row>
                )}
            </CardGroup>
        </Container>
    );
}