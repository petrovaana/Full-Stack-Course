import { useState } from "react"

const sum = ({ good, neutral, bad }) => {
  return (good + neutral + bad)
}

const ave = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  if (all === 0) {
    return 0
  }
  
  return (good - bad) / all
}

const pos = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  if (all === 0) {
    return 0
  }
  return (good / all) * 100
}

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0, neutral: 0, bad: 0
  })

  const handleGoodClick = () => {
    setFeedback({
      ...feedback,
      good: feedback.good + 1
    })
  }

  const handleNeutralClick = () => {
    setFeedback({
      ...feedback,
      neutral: feedback.neutral + 1
    })
  }

  const handleBadClick = () => {
    setFeedback({
      ...feedback,
      bad: feedback.bad + 1
    })
  }

  return (
    <div>
      <h1>give feedback</h1>

      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>

      <div>
        <h1>statistics</h1>
        <p>good {feedback.good}</p>
        <p>neutral {feedback.neutral}</p>
        <p>bad {feedback.bad}</p>
        <p>all {sum(feedback)}</p>
        <p>average {ave(feedback)}</p>
        <p>positive {pos(feedback)}%</p>
      </div>
    </div>
  )
}

export default App
