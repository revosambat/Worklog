import React, { Component } from "react"
import axios from "axios"

import { Modal, Form, Button } from "react-bootstrap"

export default class WorklogAddForm extends Component {
	state = {
		id: null,
		taskName: "",
		taskDescription: "",
		startTime: "",
		endTime: "",
	}
	handleChangeTaskForm = (e) => {
		this.setState({ ...this.state, [e.target.name]: e.target.value })
		this.setState({ id: Date.now() })
	}
	handleAddTask = (e) => {
		e.preventDefault()
		const empId = this.props.emp.map((id) => id.id)
		axios
			.post(`http://localhost:3000/employee/${empId}/worklog`, this.state)
			.then(() => alert("task added succesfully"))
			.then(() => window.location.reload())
			.catch((error) => console.log(error))
		console.log(this.state)
		this.props.handleShow()
	}
	render() {
		return (
			<>
				<Modal
					show={!this.props.show}
					onHide={this.props.handleShow}
					backdrop="static"
					keyboard={false}
				>
					<Modal.Header closeButton>
						<Modal.Title>Modal title</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form onSubmit={this.handleAddTask}>
							<Form.Group>
								<Form.Label>Task Name</Form.Label>
								<Form.Control
									type="text"
									placeholder="Enter task name"
									name="taskName"
									value={this.state.taskName}
									onChange={this.handleChangeTaskForm}
								/>
							</Form.Group>

							<Form.Group>
								<Form.Label>Task Description</Form.Label>
								<Form.Control
									type="textfield"
									placeholder="Describe Task"
									name="taskDescription"
									value={this.state.taskDescription}
									onChange={this.handleChangeTaskForm}
								/>
							</Form.Group>
							<Form.Group>
								<Form.Label>Start Time</Form.Label>
								<Form.Control
									type="time"
									name="startTime"
									value={this.state.startTime}
									onChange={this.handleChangeTaskForm}
								/>
							</Form.Group>
							<Form.Group>
								<Form.Label>End Time</Form.Label>
								<Form.Control
									type="time"
									name="endTime"
									value={this.state.endTime}
									onChange={this.handleChangeTaskForm}
								/>
							</Form.Group>
							<Button
								variant="secondary"
								onClick={this.props.handleShow}
								style={{ marginRight: "73%" }}
							>
								Close
							</Button>
							<Button variant="primary" type="submit">
								Add
							</Button>
						</Form>
					</Modal.Body>
				</Modal>
			</>
		)
	}
}
