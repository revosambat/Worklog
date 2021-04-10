import {
	FETCH_EMPLOYEE_REQUEST,
	FETCH_EMPLOYEE_SUCCESS,
	FETCH_EMPLOYEE_FAIL,
} from "../ActionTypes/ActionType"

const initialState = {
	employeeData: [],
	error: "",
}

const EmployeeReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_EMPLOYEE_REQUEST:
			return {
				...state,
			}
		case FETCH_EMPLOYEE_SUCCESS:
			return {
				error: "",
				employeeData: action.payload,
			}
		case FETCH_EMPLOYEE_FAIL:
			return {
				employeeData: [],
				error: action.payload,
			}
		default:
			return {
				employeeData: state.employeeData,
			}
	}
}

export default EmployeeReducer
