import { useState } from "react"
import confetti from "canvas-confetti"
import { Square } from "./components/Square"
import { TURNS } from "./constants"
import { checkWinnerFrom, checkEndGame } from "./logic/board"
import { WinnerModal } from "./components/WinnerModal"

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null) //null: no hay ganador, false: hay un empate

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
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
    const newWinner = checkWinnerFrom(newBoard)
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
        <WinnerModal resetGame={resetGame} winner={winner} />
      </main>
    </>
  )
}

export default App