import {
	FETCH_WORKLOG_REQUEST,
	FETCH_WORKLOG_SUCCESS,
	FETCH_WORKLOG_FAIL,
} from "./ActionType"

import axios from "axios"

export const fetchWorklog = () => {
	return (dispatch) => {
		dispatch(fetchWorklogReqeust())

		axios
			.get("http://localhost:3000/worklog")
			.then((res) => {
				const workLogData = res.data
				dispatch(fetchWorklogSuccess(workLogData))
			})
			.catch((error) => dispatch(fetchWorklogFail(error)))
	}
}

export const fetchWorklogReqeust = () => {
	return {
		type: FETCH_WORKLOG_REQUEST,
	}
}

export const fetchWorklogSuccess = (workLogData) => {
	return {
		type: FETCH_WORKLOG_SUCCESS,
		payload: workLogData,
	}
}

export const fetchWorklogFail = (error) => {
	return {
		type: FETCH_WORKLOG_FAIL,
		payload: error.message,
	}
}
