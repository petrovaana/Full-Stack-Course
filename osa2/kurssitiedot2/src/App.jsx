import Course from './components/Course'

const App = ({ course }) => {
  const total = course.parts.reduce( (s, p) => s + p.exercises, 0)
  return (
    <div>
      <h1>{ course.name }</h1>
      <ul>
        {course.parts.map(part => (
          <Course key={part.id} part={part} />
        ))}
      </ul>
      <p>total of {total} exercises</p>
    </div>
  )
}

export default App
