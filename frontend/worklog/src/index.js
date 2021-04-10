import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"

import "bootstrap/dist/css/bootstrap.min.css"

import { Provider } from "react-redux"
import thunk from "redux-thunk"

import { createStore, applyMiddleware, compose } from "redux"
import reducers from "./Reducers/index"

const composeEnchancers =
	window.__REDUX__DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
	reducers,
	window.REDUX_DATA,
	composeEnchancers(applyMiddleware(thunk))
)

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
