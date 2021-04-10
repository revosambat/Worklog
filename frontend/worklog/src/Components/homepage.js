import React, { Component } from "react"

import { Card, Row, Button } from "react-bootstrap"

export default class Homepage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			ifLoginAdmin: false,
			ifLoginEmployee: false,
		}
		this.handleAdminClick = this.handleAdminClick.bind(this)
		this.handleEmployeeClick = this.handleEmployeeClick.bind(this)
	}

	handleAdminClick() {
		if (localStorage.getItem("admin") !== null) {
			this.setState({ ifLoginAdmin: !this.state.ifLoginAdmin })
		} else {
			alert("you need to login first")
		}
	}
	handleEmployeeClick() {
		if (localStorage.getItem("employee") !== null) {
			this.setState({ ifLoginEmployee: !this.state.ifLoginEmployee })
		} else {
			alert("you need to login first")
		}
	}
	render() {
		return (
			<div>
				<Row style={{ marginTop: "7%", textAlign: "left", color: "#ffffff" }}>
					<Card
						style={{
							width: "40%",
							marginLeft: "auto",
							marginRight: "auto",
							backgroundColor: "#363740",
						}}
					>
						<Card.Body>
							<Card.Title>Admin</Card.Title>
							<Card.Text>
								Admin page contains the worklog of every employee.
								<br />
								Login Credentials:
								<br /> Username : admin <br />
								Password : admin
							</Card.Text>
							<Button onClick={this.handleAdminClick}>Admin</Button>
						</Card.Body>
					</Card>
					<Card
						style={{
							width: "40%",
							marginLeft: "auto",
							marginRight: "auto",
							backgroundColor: "#363740",
						}}
					>
						<Card.Body>
							<Card.Title>Employees</Card.Title>
							<Card.Text>
								Employee page contains the task details of employee. Also, you
								can add and delete the tasks <br />
								Login Credentials: <br />
								Username : sambat123@gmail.com / sanjiv123@gmail.com /
								surya123@gmail.com <br />
								Password : sambat123 / sanjiv123 / surya123
							</Card.Text>
							<Button onClick={this.handleEmployeeClick}>Employee</Button>
						</Card.Body>
					</Card>
				</Row>
				<Card
					style={{
						marginTop: "8%",
						marginLeft: "auto",
						marginRight: "auto",
						backgroundColor: "#363740",
						color: "#ffffff",
					}}
				>
					<Card.Body>
						<Card.Title>Port Details</Card.Title>
						<Card.Text>
							Json server should run in port 3000 and react app should run in
							port 3001 <br />
						</Card.Text>
					</Card.Body>
				</Card>
				{this.state.ifLoginAdmin ? this.props.history.push("/admin") : false}
				{this.state.ifLoginEmployee
					? this.props.history.push("/employee")
					: false}
			</div>
		)
	}
}
