import {
	FETCH_WORKLOG_REQUEST,
	FETCH_WORKLOG_SUCCESS,
	FETCH_WORKLOG_FAIL,
} from "../ActionTypes/ActionType"

const initialState = {
	workLogData: [],
	error: "",
}

const WorklogReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_WORKLOG_REQUEST:
			return {
				...state,
			}
		case FETCH_WORKLOG_SUCCESS:
			return {
				error: "",
				workLogData: action.payload,
			}
		case FETCH_WORKLOG_FAIL:
			return {
				workLogData: [],
				error: action.payload,
			}
		default:
			return {
				workLogData: state.workLogData,
			}
	}
}

export default WorklogReducer
