import React, { Component } from "react"
import { Line } from "react-chartjs-2"

export default class WorkProgress extends Component {
	render() {
		const empTask = this.props.tasks.filter(
			(task) => task.employeeId == this.props.employeeId
		)
		const timeDiff = empTask.map(
			(task) => (parseInt(task.endTime) - parseInt(task.startTime)) * 60
		)
		this.state = {
			labels: empTask.map((task) => task.taskName),
			datasets: [
				{
					label: "Tasks",
					fill: false,
					lineTension: 0.1,
					backgroundColor: "rgba(75,192,192,0.4)",
					borderColor: "rgba(75,192,192,1)",
					borderCapStyle: "butt",
					borderDash: [],
					borderDashOffset: 0.0,
					borderJoinStyle: "miter",
					pointBorderColor: "rgba(75,192,192,1)",
					pointBackgroundColor: "#fff",
					pointBorderWidth: 1,
					pointHoverRadius: 5,
					pointHoverBackgroundColor: "rgba(75,192,192,1)",
					pointHoverBorderColor: "rgba(220,220,220,1)",
					pointHoverBorderWidth: 2,
					pointRadius: 1,
					pointHitRadius: 10,
					data: timeDiff,
				},
			],
		}
		return (
			<div>
				<h2>Task of {this.props.employeeName}</h2>
				<Line ref="chart" data={this.state} />
			</div>
		)
	}
}
