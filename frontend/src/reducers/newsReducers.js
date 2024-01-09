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

export const newsListReducer = (state = { articles: [] }, action) => {
  switch (action.type) {
    case NEWS_LIST_REQUEST:
      return { loading: true, articles: [] }
    case NEWS_LIST_SUCCESS:
      return {
        loading: false,
        articles: action.payload.articles,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case NEWS_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const sourcesListReducer = (state = { sources: [] }, action) => {
  switch (action.type) {
    case NEWS_SOURCES_REQUEST:
      return { loading: true, sources: [] }
    case NEWS_SOURCES_SUCCESS:
      return {
        loading: false,
        sources: action.payload,
      }
    case NEWS_SOURCES_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const trendingListReducer = (state = { articles: [] }, action) => {
  switch (action.type) {
    case NEWS_TRENDING_REQUEST:
      return { loading: true, articles: [] }
    case NEWS_TRENDING_SUCCESS:
      return {
        loading: false,
        articles: action.payload,
      }
    case NEWS_TRENDING_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const trendingSourceListReducer = (state = { articles: [] }, action) => {
  switch (action.type) {
    case TRENDING_SOURCE_REQUEST:
      return { loading: true, articles: [] }
    case TRENDING_SOURCE_SUCCESS:
      return {
        loading: false,
        articles: action.payload.articles,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case TRENDING_SOURCE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const sourcesParamsListReducer = (state = { sources: [] }, action) => {
  switch (action.type) {
    case SOURCES_PARAMS_REQUEST:
      return { loading: true, sources: [] }
    case SOURCES_PARAMS_SUCCESS:
      return {
        loading: false,
        sources: action.payload.sources,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case SOURCES_PARAMS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
