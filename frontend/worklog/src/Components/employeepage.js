import React, { Component } from "react"
import { connect } from "react-redux"

import WorklogAddForm from "../Components/worklogCRUD/worklogAddForm"
import { fetchWorklog } from "../ActionTypes/WorklogAction"

import { Button, Table } from "react-bootstrap"

import axios from "axios"

class Employeepage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			emp: [],
			show: "false",
		}
		this.handleShow = this.handleShow.bind(this)
	}
	handleShow = () => {
		this.setState({ show: !this.state.show })
	}

	componentDidMount() {
		this.setState({ emp: JSON.parse(localStorage.getItem("employee") || "[]") })
		this.props.fetchWorklog()
	}

	handleDelete(taskId) {
		axios
			.delete(`http://localhost:3000/worklog/${taskId}`)
			.then((res) => alert("deleted Sucessfully"))
			.then(() => window.location.reload())
			.catch((error) => console.log(error))
	}
	render() {
		return (
			<div>
				{/* {console.log(this.state.emp.map((work) => work.worklog))} */}
				<h1>{this.state.emp.map((name) => name.firstName)}</h1>
				<Table
					striped
					bordered
					hover
					style={{ width: "90%", marginRight: "auto", marginLeft: "auto" }}
				>
					<thead>
						<tr>
							<th>Task Name</th>
							<th>Task Description</th>
							<th>Start Time</th>
							<th>End Time</th>
						</tr>
					</thead>
					<tbody>
						{this.props.workLogData
							.filter(
								(id) => id.employeeId == this.state.emp.map((id) => id.id)
							)
							.map((data) => (
								<tr>
									<td>{data.taskName}</td>
									<td>{data.taskDescription}</td>
									<td>{data.startTime}</td>
									<td>{data.endTime}</td>
									<td>
										<Button
											variant="danger"
											onClick={() => this.handleDelete(data.id)}
										>
											X
										</Button>
									</td>
								</tr>
							))}
					</tbody>
				</Table>
				<Button onClick={this.handleShow}>Add WorkLog</Button>
				<WorklogAddForm
					show={this.state.show}
					handleShow={this.handleShow}
					emp={this.state.emp}
				/>
			</div>
		)
	}
}

const mapStatetoProps = (storeState) => ({
	workLogData: storeState.WorklogReducer.workLogData,
	error3: storeState.WorklogReducer.error3,
})

const mapDispatchtoProps = (dispatch) => {
	return {
		fetchWorklog: () => dispatch(fetchWorklog()),
	}
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Employeepage)
