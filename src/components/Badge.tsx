import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle} from "@fortawesome/free-solid-svg-icons";
import "./Badge.css"
import faker from "faker";

export type SkillLevel = "gold" | "silver" | "bronze";

export default function Badge(props: { skill: any }) {

    const colors = ["gold", "silver", "#cd7f32"];

    function getColor() {
        console.log(colors[faker.random.number(2)]);
        return colors[faker.random.number(2)];
    }

    return (
        <div className="badge-container">
            <div className="color-container">
                <span className="icon"><FontAwesomeIcon color={getColor()} icon={faCircle} /></span>
                <span className="skill">{props.skill}</span>
            </div>
        </div>
    );
}