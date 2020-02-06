import React, {useState} from "react";
import TagsInput from 'react-tagsinput'
import {Typeahead} from 'react-bootstrap-typeahead'; // ES2015
import 'react-bootstrap-typeahead/css/Typeahead.css';

import 'react-tagsinput/react-tagsinput.css'
import * as faker from "faker"; // If using WebPack and style-loader.


export default function TagBar() {
    const options = new Array(faker.random.number(100))
        .fill(1)
        .map(_ =>
            faker.random.words()
        );


    return (
        <Typeahead
        clearButton
        defaultSelected={options.slice(0, 5)}
        multiple
        options={options}
        placeholder="Choose a state..."
    />
    );
}