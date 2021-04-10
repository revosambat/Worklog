import axios from "axios"

import {
	FETCH_ADMIN_REQUEST,
	FETCH_ADMIN_SUCCESS,
	FETCH_ADMIN_FAIL,
} from "./ActionType"

//perform api call to fetch the admin credentials

export const fetchAdmin = () => {
	return (dispatch) => {
		dispatch(fetchAdminRequest())

		axios
			.get("http://localhost:3000/admin")
			.then((res) => {
				const adminCredential = res.data
				dispatch(fetchAdminSuccess(adminCredential))
			})
			.catch((error) => dispatch(fetchAdminFail(error)))
	}
}

export const fetchAdminRequest = () => {
	return {
		type: FETCH_ADMIN_REQUEST,
	}
}

export const fetchAdminSuccess = (adminCredential) => {
	return {
		type: FETCH_ADMIN_SUCCESS,
		payload: adminCredential,
	}
}

export const fetchAdminFail = (error) => {
	return {
		type: FETCH_ADMIN_FAIL,
		payload: error.message,
	}
}
