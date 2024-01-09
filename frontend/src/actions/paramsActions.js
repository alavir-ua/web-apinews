import {
  SAVE_QUERY_PARAMS,
} from '../constants/paramsConstants'

export const saveQueryParams = (data) => async (dispatch) => {
  dispatch({
    type: SAVE_QUERY_PARAMS,
    payload: data,
  })
  localStorage.setItem('queryParams', JSON.stringify(data))
}


