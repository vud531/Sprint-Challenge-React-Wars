import React, { Component } from 'react';
import Character from './Character';
import './StarWars.css';


const Characters = props => {
    // console.log(props.charactersProps)

    return(
        <ul 
        className={props.className}>
        {props.charactersProps.map((characterProps, index) => (
            <Character 
            key={index}
            className="character" 
            characterProps={characterProps}/>))}
        </ul>
    );
}

export default Characters;