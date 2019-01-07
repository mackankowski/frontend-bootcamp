import React from 'react';
import './style.css'

const Square = (props) => {
  return (
    <div className="cell" onClick={props.onClick}>{props.value}</div>
  )
}

export default Square