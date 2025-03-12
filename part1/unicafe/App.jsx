import { useState } from 'react'

function Header({ text }) {
    return (
        <div>
            <h1>{text}</h1>
        </div>
    )
}

function Button({ onClick, text }) {
    return (
        <button onClick={onClick}>
            {text}
        </button>
    )
}

function StatisticLine({ text, stat }) {
    return (
        <tr>
            <td>{text}</td> 
            <td>{stat}</td>
        </tr>
    )
}

const Statistics = (props) => {
    if (!props.good && !props.bad && !props.neutral) {
        return <StatisticLine text='No feedback given' />
    }
    return (
        <>
            <StatisticLine text='good' stat={props.good}/>
            <StatisticLine text='neutral' stat={props.neutral}/>
            <StatisticLine text='bad' stat={props.bad}/>
            <StatisticLine text='all' stat={props.total} />
            <StatisticLine text='average' stat={props.average} />
            <StatisticLine text='positive' stat={props.positive + '%'} />
        </>
    )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  const total = good + bad + neutral
  const average = (good - bad) / (good + bad + neutral)
  const positive = (good / (good + neutral + bad)) * 100

  return (
    <div>
        <Header text='give feedback' />
        <Button onClick={handleGood} text='good' />
        <Button onClick={handleNeutral} text='neutral' />
        <Button onClick={handleBad} text='bad' />
        <Header text='statistics' />
        <Statistics good={good} bad={bad} neutral={neutral} total={total} average={average} positive={positive} />
    </div>
  )
}

export default App
