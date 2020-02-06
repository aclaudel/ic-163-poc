import React from "react";
import {Craftspeople} from "../core/Craftspeople";
import CraftspersonCard from "./CraftspersonCard";
import Col from "react-bootstrap/Col";
import {CardGroup, Container, Row} from "react-bootstrap";

export default function CraftspeopleView(props: { filteredSkills: any[], craftspeople: Craftspeople, skills:any[] }) {
    return (
        <Container data-testid="craftspeople-view">
            <CardGroup className="">
                {props.craftspeople
                    .filter(c => {
                        if(props.filteredSkills.length === 0) return true;
                        if(!c.skills) return false;
                        return c.skills.filter(s => props.filteredSkills.includes(s)).length > 0;
                    })
                    .map(craftsperson =>
                    <Row>
                        <CraftspersonCard skills={props.skills} craftsperson={craftsperson} />
                    </Row>
                )}
            </CardGroup>
        </Container>
    );
}