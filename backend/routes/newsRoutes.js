import express from 'express'
const router = express.Router()
import {
  getNews,
  getTrending,
  getSources,
  getTrendingBySource,
  getSourcesByParams,
} from '../controllers/newsController.js'

router.post('/', getNews)
router.get('/trending', getTrending)
router.post('/sources', getSources)
router.post('/trending/source', getTrendingBySource)
router.post('/sources/params', getSourcesByParams)

export default router
