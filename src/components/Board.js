import React from 'react'
import Square from './Square';
import '/Users/nafismolla/tic-tac-toe/src/App.css';


const style = {
    border: '4px solid darkblue',
    borderRadius: '10px',
    width: '250px',
    height: '250px',
    margin: '0, auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)',
    align: 'center'
}


export default function Board({squares,onClick}) {
    return (
        <div style={style}>
            {squares.map((square,i) => {
                return <Square key={i} value={square} onClick={() => onClick(i)} />
            })}
        </div>
    )
}
