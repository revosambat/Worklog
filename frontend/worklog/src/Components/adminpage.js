import React, { Component } from "react"

import { fetchWorklog } from "../ActionTypes/WorklogAction"
import { fetchEmployee } from "../ActionTypes/EmployeeAction"

import { Row, Card, ListGroup } from "react-bootstrap"

import { connect } from "react-redux"
import { Link } from "react-router-dom"
import WorkProgress from "./workProgess/workProgress"

class Adminpage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			employeeId: "",
			tasks: {},
			employeeName: "",
		}
		this.handleSelect = this.handleSelect.bind(this)
	}
	componentDidMount() {
		this.props.fetchEmployee()
		this.props.fetchWorklog()
	}
	handleSelect(empId, empFirstName) {
		this.setState({
			employeeId: empId,
			employeeName: empFirstName,
		})
	}
	render(props) {
		return (
			<>
				<h1>WorkLogs of employees</h1>

				<div>
					<Row>
						<ListGroup
							style={{
								marginLeft: "auto",
								marginRight: "auto",
								marginTop: "5%",
								width: "25%",
							}}
						>
							<ListGroup.Item
								style={{ background: "#363740", color: "#ffffff" }}
							>
								Employee
							</ListGroup.Item>
							{this.props.employeeData.map((emp) => (
								<ListGroup.Item
									onSelect={() => this.handleSelect(emp.id, emp.firstName)}
									action
									href={"#" + emp.id}
								>
									{emp.firstName}
								</ListGroup.Item>
							))}
						</ListGroup>

						<Card
							style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}
						>
							<WorkProgress
								employeeId={this.state.employeeId}
								tasks={this.props.workLogData}
								employeeName={this.state.employeeName}
							/>
						</Card>
					</Row>
				</div>
			</>
		)
	}
}
const mapStatetoProps = (storeState) => ({
	employeeData: storeState.EmployeeReducer.employeeData,
	error2: storeState.EmployeeReducer.error2,

	workLogData: storeState.WorklogReducer.workLogData,
	error3: storeState.WorklogReducer.error3,
})

const mapDispatchtoProps = (dispatch) => {
	return {
		fetchEmployee: () => dispatch(fetchEmployee()),
		fetchWorklog: () => dispatch(fetchWorklog()),
	}
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Adminpage)
