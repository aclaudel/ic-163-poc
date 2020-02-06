import React from 'react';
import logo from './logo.svg';
import './App.css';
import CraftspeopleView from "./components/CraftspeopleView";
import CraftspeopleFromGSuite from "./craftspeople_from_gsuite.json";

export default function App() {
  const craftspeople = CraftspeopleFromGSuite.users;

  return (
    <CraftspeopleView craftspeople={craftspeople} />
  );
};
