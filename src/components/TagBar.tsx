import React from "react";
import {Typeahead} from 'react-bootstrap-typeahead'; // ES2015
import 'react-bootstrap-typeahead/css/Typeahead.css';

import 'react-tagsinput/react-tagsinput.css'


export default function TagBar(props: {initSkills: any[], updateSkills:any}) {

    return (
        <Typeahead
        clearButton
        multiple
        onChange={props.updateSkills}
        options={props.initSkills}
        placeholder="Choose a state..."
    />
    );
}