import React from "react";
import {Craftsperson} from "../core/Craftsperson";

export default function CraftspersonItem(props: { craftsperson: Craftsperson }) {
    return (
        <div data-testid="craftsperson-item">
            <p>{props.craftsperson.name.fullName}</p>
        </div>
    );
}