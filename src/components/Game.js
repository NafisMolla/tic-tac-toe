import {calculateWinner} from '../win'
import React, {useState} from 'react'
import Board from './Board'


const styles = {
    width: '200px',
    margin: '20px'
}

export default function Game() {
const [board, setBoard] = useState(Array(9).fill(null));
const [xIsNext, setxIsNext] = useState(true)
const winner = calculateWinner(board)
    
    const handleClick = (i) =>{
        const boardCopy = [...board]
        if(winner || boardCopy[i]){
            return 
        }

        boardCopy[i] = xIsNext ? 'X':'O';
        setBoard(boardCopy);
        setxIsNext(!xIsNext)

    }

    const jumpTo = () =>{

    }

    const reset = () => {
        return <button onClick={() => setBoard(Array(9).fill(null))}>
            Start New Game
        </button>
    }
    
    
    
    return (
        <>
        <Board squares={board} onClick={handleClick} />
        <div style={styles}>
            <p> {winner ? "Winner: "+ winner : "Next Player " + (xIsNext ? "X": "O")} </p>
            {reset()}
        
        </div>
    
        </>
    )
}
