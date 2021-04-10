import React from "react"
import { Route, Redirect } from "react-router-dom"
// import Adminpage from "../Components/adminpage"
// import Employeepage from "../Components/employeepage"

export const PrivateRouteAdmin = ({
	component: Adminpage,
	loggedInAdmin,
	path,
	...rest
}) => {
	return (
		<Route
			path={path}
			{...rest}
			render={(props) => {
				return loggedInAdmin || localStorage.getItem("admin") !== null ? (
					<Adminpage {...props} />
				) : (
					<Redirect to="/" />
				)
			}}
		/>
	)
}

export const PrivateRouteEmployee = ({
	component: Employeepage,
	loggedInEmployee,
	path,
	...rest
}) => {
	return (
		<Route
			path={path}
			{...rest}
			render={(props) => {
				return loggedInEmployee || localStorage.getItem("employee") !== null ? (
					<Employeepage {...props} />
				) : (
					<Redirect to="/" />
				)
			}}
		/>
	)
}
