import { useState } from 'react'

const Display = (props) => {
    return (
        <div>
            <h1>{props.header}</h1>
            {props.anecdote}
        </div>
    )
}

const indexOfMax = (array) => {
    let max = array[0]
    let maxIndex = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i + 1] > max) {
            max = array[i + 1]
            maxIndex = i + 1
        }
    }

    return maxIndex
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(8))
  const [mostVotes, setMostVotes] = useState(0)

  const randomAnecdote = () => {
    return setSelected(Math.floor(Math.random() * 8))
  }

  const incrementVote = (selected) => {
    const copy = [...votes]
    copy[selected]++
    setVotes(copy)
    setMostVotes(indexOfMax(copy))
  }

  const handleVote = () => {
    return (
        incrementVote(selected)
    )
  }

  return (
    <>
        <Display header='Anecdote of the day' anecdote={anecdotes[selected]} />
        <div>
            has {votes[selected]} votes
        </div>
        <div>
            <button onClick={handleVote}>
                vote
            </button>
            <button onClick={randomAnecdote}>
                random anecdote
            </button>
        </div>
        <Display header='Anecdote with the most votes' anecdote={anecdotes[mostVotes]} />
    </>
  )
}

export default App