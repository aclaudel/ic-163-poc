import React from "react";
import CraftspersonItem from "../components/CraftspersonItem";
import CraftspeopleFromGSuite from "../craftspeople_from_gsuite.json";

export default {
    title: 'Craftsperson'
}

const defaultCraftsperson = CraftspeopleFromGSuite.users[9];

export const Default = () =>
    <CraftspersonItem craftsperson={defaultCraftsperson}/>;