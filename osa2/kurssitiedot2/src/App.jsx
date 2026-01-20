import Course from './components/Course'

const App = ({ course }) => {
  return (
    <div>
      <h1>{ course.name }</h1>
      <ul>
        {course.parts.map(part => (
          <Course key={part.id} part={part} />
        ))}
      </ul>
    </div>
  )
}

export default App
