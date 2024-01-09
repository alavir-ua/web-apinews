import {
  SAVE_QUERY_PARAMS,
} from '../constants/paramsConstants.js'

export const paramsReducer = (state = {}, action) => {
  switch (action.type) {
    case SAVE_QUERY_PARAMS:
      return {
        ...state,
        country: action.payload.country,
        category: action.payload.category,
        source: action.payload.source,
        language: action.payload.language,
      }
    default:
      return state
  }
}
