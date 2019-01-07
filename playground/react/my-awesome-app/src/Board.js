import React from 'react';
import './style.css'
import Square from './Square'

class Board extends React.Component {
  state = {
    squares: Array(9).fill(null),
    isNextX: true,
    winner: false
  }

  calculateWinner(squares) {
    const lines = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 5, 9],
      [3, 6, 9],
      [3, 5, 7],
      [2, 5, 7],
      [1, 4, 7]
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a]
        && squares[a] === squares[b]
        && squares[b] === squares[c]) {
        this.setState({ winner: squares[a] })
      }
    }

  }

  handleClick(i) {
    const changedSquares = this.state.squares.slice();
    changedSquares[i] = this.state.isNextX ? 'x' : 'o';

    this.calculateWinner(changedSquares);
    this.setState({
      squares: changedSquares,
      isNextX: !this.state.isNextX
    })
  }

  renderSquare = (i) => {
    return (
      <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />
    )
  }

  render() {
    return (
      <div>
        {this.state.winner ? (
          <h1>Winner is: {this.state.winner}</h1>
        ) : (
            <h1>Next player: {this.state.isNextX ? 'x' : 'o'}</h1>
          )}
        <div className="row">
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
        </div>
        <div className="row">
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
        </div>
        <div className="row">
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(9)}
        </div>
      </div>
    )
  }
}

export default Board