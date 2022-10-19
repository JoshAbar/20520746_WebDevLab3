import { INSPECT_MAX_BYTES } from "buffer";
import React from "react";
import ReactDOM from "react-dom";


const smartPeople = (
    {name: 'Tesla', age: 60, IQ:300},
    {name: 'Tesla', age: 60, IQ:300},
    {name: 'Tesla', age: 60, IQ:300}
);

const element = (
    <ul>
        {smartPeople.map((i) => (
            <li key={i}>{i.name + " " + i.age + " " + i.IQ}</li>
        ))}
    </ul>
)
ReactDOM.render(element, document.getElementById('root'));