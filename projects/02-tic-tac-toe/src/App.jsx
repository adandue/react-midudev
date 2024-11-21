import { useState } from "react"
import confetti from "canvas-confetti"


const TURNS = {
  X: 'x',
  O: 'o'
}



const Square = ({children, isSelected, updateBoard, index}) => {
  const className = `square ${isSelected ? 'is-selected': ''}`
  const handleClick = () => {
    updateBoard(index)
  }
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

const WINNER_COMBOS = [
  [0, 1 , 2],
  [3, 4 , 5],
  [6, 7 , 8],
  [0, 3 , 6],
  [1, 4 , 7],
  [2, 5 , 8],
  [0, 4 , 8],
  [2, 4 , 6],
]

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null) //null: no hay ganador, false: hay un empate
  const checkWinner = (boardToCheck) => {
    //revisamos todas las combinaciones ganadoras
    //para ver si X u O  ganó
    for (const combo of WINNER_COMBOS) {
      const [a,b,c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a] //x u o
      }
    }
    //si no hay ganador
    return null
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const checkEndGame = (newBoard) => {
    //revisamos si hay un empate
    //si no hay más espacios vacíos en el tablero
    return newBoard.every((square) => square !== null)
  }

  const updateBoard = (index) => {
    //No actualizamos esta posición si ya tiene algo
    if(board[index] || winner) return
    //actualizar el tablero
    const newBoard = [...board]
    //spread y rest operators son muy importantes
    //porque los estados siempre se deben de tratar como inmutables
    //los datos modificados siempre deben ser nuevos
    newBoard[index] = turn
    setBoard(newBoard) //asíncrona
    //cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    //revisar si hay un ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)// la actualización de los estados en React es asíncrona
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // empate
    }
  }

  return (
    <>
      <main className="board">
        <h1>Gato</h1>
        <button onClick={resetGame}>Volver a comenzar</button>
        <section className="game">
          {
            board.map((square, index) => {
              return (
                <Square  
                  key={index}
                  index={index}
                  updateBoard={updateBoard}
                >
                  {square}
                </Square>
              )
            })
          }
        </section>
        <section className="turn">
          <Square isSelected={turn === TURNS.X}>
            {TURNS.X}
          </Square>
          <Square isSelected={turn === TURNS.O}>
            {TURNS.O}
          </Square>
        </section>
        {
          winner !== null && (
            <section className="winner">
              <div className="text">
                <h2>
                  {
                    winner === false
                      ? 'Empate'
                      : 'Ganó: '
                  }
                  <header className="win">
                    {winner && <Square>{winner}</Square>}
                  </header>
                  <footer>
                    <button onClick={resetGame}>Empezar de nuevo</button>
                  </footer>
                </h2>
              </div>
            </section>
          )
        }
      </main>
    </>
  )
}

export default App