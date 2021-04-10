import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Loginpage from "../Components/loginpage"
import Homepage from "../Components/homepage"
import Adminpage from "../Components/adminpage"
import Employeepage from "../Components/employeepage"
import {
	PrivateRouteAdmin,
	PrivateRouteEmployee,
} from "../routes/privateroutes"
import Navibar from "../Components/navbar"

export default class Routes extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loggedInAdmin: false,
			loggedInEmployee: false,
			displayLogout: false,
			displayLogin: true,
		}
		this.changeLoggedInAdmin = this.changeLoggedInAdmin.bind(this)
		this.changeLoggedInEmployee = this.changeLoggedInEmployee.bind(this)
		this.toggleLogInOut = this.toggleLogInOut.bind(this)
	}
	changeLoggedInAdmin = () => {
		this.setState({ loggedInAdmin: !this.state.loggedInAdmin })
	}
	changeLoggedInEmployee = () => {
		this.setState({ loggedInEmployee: !this.state.loggedInEmloyee })
	}
	toggleLogInOut = () => {
		this.setState({
			displayLogout: !this.state.displayLogout,
			displayLogin: !this.state.displayLogin,
		})
	}
	render() {
		return (
			<Router>
				<Navibar
					displayLogout={this.state.displayLogout}
					displayLogin={this.state.displayLogin}
				/>
				<div>
					<Switch>
						<Route path="/" component={Homepage} exact={true} />
						<Route
							path="/login"
							render={(props) => (
								<Loginpage
									changeLoggedInAdmin={this.changeLoggedInAdmin}
									changeLoggedInEmployee={this.changeLoggedInEmployee}
									toggleLogInOut={this.toggleLogInOut}
									{...props}
								/>
							)}
							exact={true}
						/>
						<PrivateRouteAdmin
							path="/admin"
							component={Adminpage}
							loggedInAdmin={this.state.loggedInAdmin}
							exact={true}
						/>
						<PrivateRouteEmployee
							path="/employee"
							component={Employeepage}
							loggedInEmployee={this.state.loggedInEmployee}
							exact={true}
						/>
					</Switch>
				</div>
			</Router>
		)
	}
}
