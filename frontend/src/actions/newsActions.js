import axios from 'axios'
import {
  NEWS_LIST_REQUEST,
  NEWS_LIST_SUCCESS,
  NEWS_LIST_FAIL,
  NEWS_TRENDING_REQUEST,
  NEWS_TRENDING_SUCCESS,
  NEWS_TRENDING_FAIL,
  NEWS_SOURCES_REQUEST,
  NEWS_SOURCES_SUCCESS,
  NEWS_SOURCES_FAIL,
  TRENDING_SOURCE_REQUEST,
  TRENDING_SOURCE_SUCCESS,
  TRENDING_SOURCE_FAIL,
  SOURCES_PARAMS_REQUEST,
  SOURCES_PARAMS_SUCCESS,
  SOURCES_PARAMS_FAIL,
} from '../constants/newsConstants'

export const listNews = (params, pageNumber = '', keyword = '') => async (
  dispatch
) => {
  try {
    dispatch({ type: NEWS_LIST_REQUEST })

    const { data } = await axios.post(
      `/api/news?pageNumber=${pageNumber}&keyword=${keyword}`,
      params
    )

    dispatch({
      type: NEWS_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: NEWS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listSources = (params) => async (dispatch) => {
  try {
    dispatch({ type: NEWS_SOURCES_REQUEST })

    const { data } = await axios.post('/api/news/sources', params)

    dispatch({
      type: NEWS_SOURCES_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: NEWS_SOURCES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listTrending = () => async (dispatch) => {
  try {
    dispatch({ type: NEWS_TRENDING_REQUEST })

    const { data } = await axios.get('/api/news/trending')

    dispatch({
      type: NEWS_TRENDING_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: NEWS_TRENDING_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listTrendingSources = (params, pageNumber = '') => async (
  dispatch
) => {
  try {
    dispatch({ type: TRENDING_SOURCE_REQUEST })

    const { data } = await axios.post(
      `/api/news/trending/source?pageNumber=${pageNumber}`,
      params
    )

    dispatch({
      type: TRENDING_SOURCE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: TRENDING_SOURCE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listSourcesParams = (params) => async (dispatch) => {
  try {
    dispatch({ type: SOURCES_PARAMS_REQUEST })

    const { data } = await axios.post('/api/news/sources/params', params)

    dispatch({
      type: SOURCES_PARAMS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: SOURCES_PARAMS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
