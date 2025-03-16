const Header = ({ text }) => {
    return (
        <h2>
            {text}
        </h2>
    )
}

const Content = ({ course }) => {
    return (
        <>
            {
                course.parts.map((part) => <Part id={part.id} name={part.name} exercises={part.exercises} />)
            }
        </>
    )
}

const Part = ({ id, name, exercises }) => {
    return (
        <p key={id}>{name} {exercises}</p>
    )
}

const Total = ({ course }) => {
    const total = course.parts.reduce((total, part) => {
        return total + part.exercises
    }, 0)
    return (
        <b>total of {total} exercises</b>
    )
}

const Course = ({ course }) => {
    return (
        <>
        <Header text={course.name} />
        <Content course={course} />
        <Total course={course} />
        </>
    )
}

export default Course