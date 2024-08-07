import { REQUEST_FILES, SEARCH_FILE } from "../actions/actions"

const initState = { all: [], filtered: [], fileName: "" }

export default function filesReducer(state = initState, action) {
  switch (action.type) {
    case REQUEST_FILES:
      return {
        all: [...state.all, ...action.files],
        fileName: "",
        filtered: []
      }
    case SEARCH_FILE:
      return {
        ...state,
        all: state.all,
        fileName: action.fileName,
        filtered: [...action.filtered]
      }
    default:
      return state
  }
}