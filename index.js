import React from "react";
import ReactDOM from "react";
const navbar=(
    <nav>
    <h1>navbar</h1>
    <ul>
        <li>menu</li>
        <li>about</li>
        <li>contact</li>
    </ul>
    </nav>
)
root.append(navbar)
const root=ReactDOM.createRoot(document.getElementById("root"))
ReactDOM.render(navbar,document.getElementById("root"))