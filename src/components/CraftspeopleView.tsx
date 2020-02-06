import React from "react";
import {Craftspeople} from "../core/Craftspeople";
import CraftspersonItem from "./CraftspersonItem";
import Col from "react-bootstrap/Col";

export default function CraftspeopleView(props: { craftspeople: Craftspeople }) {
    return (
        <div data-testid="craftspeople-view">
            {props.craftspeople.map(craftsperson =>
                <CraftspersonItem craftsperson={craftsperson} />
            )}
        </div>
    );
}