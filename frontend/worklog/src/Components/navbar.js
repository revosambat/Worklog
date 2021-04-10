import React, { Component } from "react"

import { Navbar, Nav, Button } from "react-bootstrap"

export default class Navibar extends Component {
	render() {
		return (
			<div>
				<Navbar bg="dark" variant="dark">
					<Navbar.Brand href="#home">Worklog</Navbar.Brand>
					<Nav className="mr-auto">
						<Nav.Link href="/" style={{ marginRight: "10%" }}>
							<Button style={{ marginRight: "5%" }}>Home</Button>
						</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link href="/login">
							<Button
								style={{
									display:
										(localStorage.getItem("admin") ||
											localStorage.getItem("employee")) === null
											? "block"
											: "none",
								}}
							>
								Login
							</Button>
						</Nav.Link>
						<Nav.Link href="/login">
							<Button
								onClick={() => localStorage.clear()}
								style={{
									display:
										(localStorage.getItem("employee") ||
											localStorage.getItem("admin")) !== null
											? "block"
											: "none",
								}}
							>
								Logout
							</Button>
						</Nav.Link>
					</Nav>
				</Navbar>
			</div>
		)
	}
}
