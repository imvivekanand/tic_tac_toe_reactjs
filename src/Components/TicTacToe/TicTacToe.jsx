import React from 'react'
import "./TicTacToe.css";
import circleIcon from "../Assets/Circle.png";
import crossedIcon from "../Assets/crossed.png";

const TicTacToe = () => {
  return (
    <div className='container'>
      <h1 className='title'>The Ultimate Tic Tac Toe</h1>
      <div className='board'>
    
      </div>
      <button className='reset'>Reset</button>
    </div>
  )
}

export default TicTacToe
