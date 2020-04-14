import React from 'react';

export const Pokemon = (props) => {
    console.log(props)
    return (
        <div>
            <h1>{props.pokemon.name}</h1>
            <p>{props.pokemon.id}</p>
            <img src={props.pokemon.image} alt={props.pokemon.name}/>
        </div>
    )
}