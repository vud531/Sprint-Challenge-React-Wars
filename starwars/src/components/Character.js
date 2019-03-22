import React, { Component } from 'react';
import './StarWars.css';


const Character = props => {
    console.log(props.characterProps)

    const char = props.characterProps
    return(
        <li className={char.name}>]
            <p>{char.name}</p>
            <div>My Character</div>
        </li>
    );
}

export default Character;