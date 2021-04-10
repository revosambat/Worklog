import {
	FETCH_EMPLOYEE_REQUEST,
	FETCH_EMPLOYEE_SUCCESS,
	FETCH_EMPLOYEE_FAIL,
} from "./ActionType"

import axios from "axios"

export const fetchEmployee = () => {
	return (dispatch) => {
		dispatch(fetchEmployeeReqeust())

		axios
			.get("http://localhost:3000/employee")
			.then((res) => {
				const employeeData = res.data
				dispatch(fetchEmployeeSuccess(employeeData))
			})
			.catch((error) => dispatch(fetchEmployeeFail(error)))
	}
}

export const fetchEmployeeReqeust = () => {
	return {
		type: FETCH_EMPLOYEE_REQUEST,
	}
}

export const fetchEmployeeSuccess = (employeeData) => {
	return {
		type: FETCH_EMPLOYEE_SUCCESS,
		payload: employeeData,
	}
}

export const fetchEmployeeFail = (error) => {
	return {
		type: FETCH_EMPLOYEE_FAIL,
		payload: error.message,
	}
}
