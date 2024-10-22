import { useState } from "react";
import "./Game.css"
export default function Game() {
    let [board,setBoard] = useState(Array(9).fill(null));
    let [isXTurn,setXTurn] = useState(true);
    let [winner,setWinner] = useState(null);
    const renderSquare = (index) => {
        return (
            <button onClick={() => handleClick(index)}>{board[index]}</button>
        );
    };



    const handleClick = (index) => {
        if(board[index]!=null) {
            return;
        }
        console.log(index, "click");
        let newBoard = [...board];
        newBoard[index] = isXTurn ? "X" : "O";
        setBoard(newBoard);
        setXTurn(!isXTurn);
        const winningCombination = checkWinner(newBoard);
        if(winningCombination) {
            setWinner(newBoard[winningCombination[0]]);

        }
    }

    let checkWinner = () =>{
    const combination =  [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    for(let i =0;i<combination.length;i++) {
        const[a,b,c] = combination[i];
        if(board[a]===board[b] && board[b]===board[c]) {
            return combination[i];
        } 
    }
    return null;
    }

    let handleReset =() =>{
        setBoard((Array(9).fill(null)));
        setWinner(null);
    };

    return (
        <>
        <div className="container">
            <h1 className="heading">TIC TAC TOE GAME <span>REACT</span></h1>
            <div className="board">
                <div className="row1">
                    <div className="boxes">{renderSquare(0)}</div>
                    <div className="boxes">{renderSquare(1)}</div>
                    <div className="boxes">{renderSquare(2)}</div>
                </div>


                <div className="row2">
                    <div className="boxes">{renderSquare(3)}</div>
                    <div className="boxes">{renderSquare(4)}</div>
                    <div className="boxes">{renderSquare(5)}</div>
                </div>
                <div className="row3">
                    <div className="boxes">{renderSquare(6)}</div>
                    <div className="boxes">{renderSquare(7)}</div>
                    <div className="boxes">{renderSquare(8)}</div>
                </div>

            </div>
            <button className="reset" onClick={handleReset}>reset</button>
        </div>
      {winner && <div>Winner is {winner}</div>}
        </>

    );
}