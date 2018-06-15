import React from 'react';
import Board from '../components/board/Board';
import calculateWinner from '../utils/calculateWinner';

export default class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      history: [
        Array(9).fill(null),
      ],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  getWinner(current) {
    const winner = calculateWinner(current);
    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else if (current.indexOf(null) === -1) {
      status = 'Game is over. Try again';
    } else {
      status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
    }

    return status;
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  handleClick(i) {
    const historyMoves = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = historyMoves[historyMoves.length - 1];
    const squares = current.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: historyMoves.concat([squares]),
      stepNumber: historyMoves.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  render() {
    const historyMoves = this.state.history;
    const current = historyMoves[this.state.stepNumber];
    const status = this.getWinner(current);

    const moves = historyMoves.map((step, move) => {
      const desc = move ?
        `Go to move #${move}` :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}
