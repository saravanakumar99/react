const page=(
    <div>
        <h1>my awesome website in react</h1>
        <h3>i love react</h3>
        <ol>
            <li>composable</li>
            <li>declarative</li>
            <li>hirable skill</li>
        </ol>
        
    </div>
)
ReactDOM.render(page,document.getElementById("root"))
document.getElementById("root").append(JSON.stringify(page))