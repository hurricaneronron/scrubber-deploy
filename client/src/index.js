import React from "react"
import ReactDOM from "react-dom"
import "./materialize.min.css"
import App from "./App.js"
import registerServiceWorker from "./registerServiceWorker"

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
