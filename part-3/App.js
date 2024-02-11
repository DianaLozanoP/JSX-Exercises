const App = () => (
    <div>
        <Person name="Paula" age={17} hobbies={["Ride bycicle", "Play video games", "Watch suspense series"]} />
        <Person name="Constantine" age={25} hobbies={["Hiking", "Reading Fiction books"]} />
        <Person name="Angela" age={59} hobbies={["Garderning", "Baking desserts"]} />
    </div>

)



ReactDOM.render(<App />, document.getElementById("root"))