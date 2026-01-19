import { useState } from "react"

const sum = ({ good, neutral, bad }) => {
  return (good + neutral + bad)
}

const ave = ({ good, bad, all }) => {
  if (all === 0) {
    return 0
  }
  
  return (good - bad) / all
}

const pos = ({ good, all }) => {
  if (all === 0) {
    return 0
  }
  return (good / all) * 100
}

const Statistics = ({ good, neutral, bad }) => {
    const all = sum({ good, neutral, bad })
    if (all === 0) {
      return "No feedback given"
    }

    return (
      <div>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {all}</p>
        <p>average {ave({ good, bad, all })}</p>
        <p>positive {pos({ good, all})}%</p>
      </div>
    )
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

      <h1>statistics</h1>
      <Statistics
       good={feedback.good}
       neutral={feedback.neutral}
       bad={feedback.bad}
      />
    </div>
  )
}

export default App
