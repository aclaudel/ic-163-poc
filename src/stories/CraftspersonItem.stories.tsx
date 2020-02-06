import React from "react";
import CraftspersonCard from "../components/CraftspersonCard";
import CraftspeopleFromGSuite from "../craftspeople_from_gsuite.json";

export default {
    title: 'Craftsperson'
}

const defaultCraftsperson = CraftspeopleFromGSuite.users[9];

export const Default = () =>
    <CraftspersonCard craftsperson={defaultCraftsperson}/>;