import React, { Component } from "react"

import { fetchAdmin } from "../ActionTypes/AdminAction"
import { fetchEmployee } from "../ActionTypes/EmployeeAction"

import { Jumbotron, Form, Button } from "react-bootstrap"
import { connect } from "react-redux"

class Loginpage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: "",
			password: "",
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleClickAdmin = this.handleClickAdmin.bind(this)
		this.handleClickEmployee = this.handleClickEmployee.bind(this)
	}
	componentDidMount() {
		this.props.fetchAdmin()
		this.props.fetchEmployee()
		console.log(this.props.employeeData.map((employee) => employee.username))
	}
	handleChange = (e) => {
		this.setState({ ...this.state, [e.target.name]: e.target.value })
	}
	handleClickAdmin = (e) => {
		const { changeLoggedInAdmin, toggleLogInOut } = this.props
		if (
			this.state.username ==
				this.props.adminCredential.map((admin) => admin.username) &&
			this.state.password ==
				this.props.adminCredential.map((admin) => admin.password)
		) {
			this.props.history.push("/admin")
			changeLoggedInAdmin()
			toggleLogInOut()
			localStorage.setItem(
				"admin",
				JSON.stringify(
					this.props.adminCredential.map((admin) => admin.username)
				)
			)
		} else {
			this.props.history.push("/login")
			alert("Invalid credentials")
		}
	}
	handleClickEmployee = (e) => {
		const { changeLoggedInEmployee, toggleLogInOut } = this.props
		if (
			this.props.employeeData
				.map((employee) => employee.username)
				.includes(this.state.username) &&
			this.props.employeeData
				.map((employee) => employee.password)
				.includes(this.state.password)
		) {
			this.props.history.push("/employee")
			changeLoggedInEmployee()
			toggleLogInOut()
			localStorage.setItem(
				"employee",
				JSON.stringify(
					this.props.employeeData.filter(
						(emp) => emp.username == this.state.username
					)
				)
			)
		} else {
			this.props.history.push("/login")
			alert("Invalid Credentials")
		}
	}
	render() {
		return (
			<div>
				<Jumbotron
					style={{
						marginTop: "5%",
						width: "50%",
						marginLeft: "auto",
						marginRight: "auto",
					}}
				>
					<Form>
						<Form.Group>
							<Form.Label>User Name</Form.Label>
							<Form.Control
								type="text"
								name="username"
								value={this.state.username}
								onChange={this.handleChange}
							></Form.Control>
						</Form.Group>
						<Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								name="password"
								value={this.state.password}
								onChange={this.handleChange}
							></Form.Control>
						</Form.Group>
						<Form.Group>
							<Button
								style={{ border: "none", marginRight: "5%" }}
								onClick={this.handleClickAdmin}
							>
								Login as Admin
							</Button>
							<Button
								style={{ border: "none" }}
								onClick={this.handleClickEmployee}
							>
								Login as Employee
							</Button>
						</Form.Group>
					</Form>
				</Jumbotron>
			</div>
		)
	}
}

const mapStatetoProps = (storeState) => ({
	adminCredential: storeState.AdminReducer.adminCredential,
	error1: storeState.AdminReducer.error1,

	employeeData: storeState.EmployeeReducer.employeeData,
	error2: storeState.EmployeeReducer.error2,
})

const mapDispatchtoProps = (dispatch) => {
	return {
		fetchAdmin: () => dispatch(fetchAdmin()),
		fetchEmployee: () => dispatch(fetchEmployee()),
	}
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Loginpage)
