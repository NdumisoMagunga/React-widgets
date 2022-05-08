import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const items = [
    {
        title: "What is react",
        content: "React is a front end JS framework"
    },
    {
        title: "Why use React",
        content: "React is a Favorite JS Library Among Engineers"
    },
    {
        title: "How do you use react",
        content: "You use react by creating components"
    },
]

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: "A Shade Of Blue",
        value: 'blue'
    }
]

export default () => {

    return (
        <div>
            <Translate />
        </div>
    )
}