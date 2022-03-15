import React from 'react'

export default function Shoes({match}) {
    return (
        <div>
             <h1>shoes</h1>
             <p>{match.params.name}</p>
        </div>
    )
}
