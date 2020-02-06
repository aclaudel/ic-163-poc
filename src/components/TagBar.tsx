import React, {useState} from "react";
import TagsInput from 'react-tagsinput'
import {Typeahead} from 'react-bootstrap-typeahead'; // ES2015
import 'react-bootstrap-typeahead/css/Typeahead.css';

import 'react-tagsinput/react-tagsinput.css'
import * as faker from "faker"; // If using WebPack and style-loader.


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