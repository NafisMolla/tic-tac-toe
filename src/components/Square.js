import React from 'react'
import '/Users/nafismolla/tic-tac-toe/src/App.css';


const style = {
    background: 'lightblue',
    border: '2px solid darkblue',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none',
    height: '100%',
    width: '100%'

    
};

export default function Square({value, onClick}) {
    
    
    return (
        <div>
            <button style={style} onClick={onClick} >
                {value}
            </button>
        </div>
    )
}
