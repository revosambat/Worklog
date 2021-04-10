import {
	FETCH_ADMIN_REQUEST,
	FETCH_ADMIN_SUCCESS,
	FETCH_ADMIN_FAIL,
} from "../ActionTypes/ActionType"

const initialState = {
	adminCredential: [],
	error: "",
}

const AdminReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_ADMIN_REQUEST:
			return {
				...state,
			}
		case FETCH_ADMIN_SUCCESS:
			return {
				error: "",
				adminCredential: action.payload,
			}
		case FETCH_ADMIN_FAIL:
			return {
				adminCredential: [],
				error: action.payload,
			}
		default:
			return {
				adminCredential: state.adminCredential,
			}
	}
}

export default AdminReducer
