const Tweet = (props) => {
    return (
        <div class="tweet">
            <p> {props.msg}</p>
            <h5>{props.username}, {props.date}</h5>
        </div>
    )
}