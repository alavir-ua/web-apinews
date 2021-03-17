import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  newsListReducer,
  sourcesListReducer,
  trendingListReducer,
  trendingSourceListReducer,
  sourcesParamsListReducer,
} from './reducers/newsReducers'
import { paramsReducer } from './reducers/paramsReducers'

const reducer = combineReducers({
  newsList: newsListReducer,
  sourcesList: sourcesListReducer,
  trendingList: trendingListReducer,
  queryParams: paramsReducer,
  trendingSourceList: trendingSourceListReducer,
  sourcesParamsList: sourcesParamsListReducer,
})

const queryParamsFromStorage = localStorage.getItem('queryParams')
  ? JSON.parse(localStorage.getItem('queryParams'))
  : {
      category: 'general',
      country: 'us',
      source: 'cnn',
      language: 'en',
    }

const initialState = {
  queryParams: queryParamsFromStorage,
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
