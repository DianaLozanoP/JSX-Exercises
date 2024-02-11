const Person = (props) => {
    let reply;
    let name;
    if (props.age > 18) {
        reply = "please go vote!"
    }
    else {
        reply = "you must be 18"
    }
    if (props.name.length > 8) {
        name = props.name.slice(0, 5)
    }
    else {
        name = props.name
    }
    return (
        <div>
            <p>Learn some information about this person.</p>
            <h3>{name}, {reply} </h3>
            <ul>
                {props.hobbies.map(h => <li>{h}</li>)}
            </ul>
        </div>
    )
}
