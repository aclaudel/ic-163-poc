import CraftspeopleFromGSuite from "../craftspeople_from_gsuite.json";

export type Craftsperson = typeof CraftspeopleFromGSuite.users[0] & {skills?: any[]};