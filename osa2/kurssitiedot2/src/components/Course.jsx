const Course = ({ course }) => {
    const total = course.parts.reduce( (s, p) => s + p.exercises, 0)
    return (
        <div>
            <h1>{ course.name }</h1>
            <ul>
              {course.parts.map(part => (
                <li key={part.id}>{part.name} {part.exercises} </li>
              ))}
            </ul>
            <p>total of {total} exercises</p>
          </div>
          )
        }

export default Course