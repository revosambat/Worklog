import { combineReducers } from "redux"

import AdminReducer from "./AdminReducer"
import EmployeeReducer from "./EmployeeReducer"
import WorklogReducer from "./WorklogReducer"

export default combineReducers({
	AdminReducer,
	EmployeeReducer,
	WorklogReducer,
})
