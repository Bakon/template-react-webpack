import React from 'react';

export default function Games() {
    const games = ['Smash Bros', 'Pokemon', 'Luguis Mansion'];

    return (
        <ul>
            {games.map(game => <li>{game}</li>)}
        </ul>
    )
}

