const App = () => (
    <div>
        <Tweet username="Violet" msg="Summer is great" date="June21/2023" />
        <Tweet username="OverTheMoon" msg="I love hockey" date="Jan 05/2024" />
        <Tweet username="DogLover" msg="My puppy just learned dancing" date="June21/2023" />
    </div>

)



ReactDOM.render(<App />, document.getElementById("root"))