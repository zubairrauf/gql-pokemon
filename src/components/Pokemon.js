import React from 'react';

export const Pokemon = (props) => {
    console.log(props)
    return (
        <div className='pokemon'>
            <div className="pokemon__name">
                <p>{props.pokemon.name}</p>
            </div>
            <div className="pokemon__meta">
                <span> {props.pokemon.maxHP}</span>
                <span> {props.pokemon.maxCP}</span>
            </div>
            <div className="pokemon__image">
                <img src={props.pokemon.image} alt={props.pokemon.name}/>
            </div>
            <div className="pokemon__attacks">
                {props.pokemon.attacks.special.slice(0, 3).map(attack => {
                    return (
                        <span key={`${attack.name}-${attack.damage}`}>{attack.name}</span>
                    )
                })}
            </div>
        </div>
    )
}