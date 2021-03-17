import NewsAPI from 'newsapi'
const newsapi = new NewsAPI(process.env.NEWS_API_KEY)
import sources from '../data/sources.js'

// @desc    Fetch all news
// @route   POST /api/news
// @access  Public
const getNews = (req, res) => {
    const page = Number(req.query.pageNumber) || 1
    const pageSize = 6
    const query = req.query.keyword || ''

    if (!query) {
      newsapi.v2
        .topHeadlines({
          category: req.body.category,
          country: req.body.country,
          pageSize: pageSize,
          page: page,
          q: query,
        })
        .then((response) => {
          const { totalResults, articles } = response
          res.json({
            articles,
            page,
            pages: Math.ceil(totalResults / pageSize),
          })
        })
    } else {
      newsapi.v2
        .everything({
          pageSize: pageSize,
          page: page,
          q: query,
        })
        .then((response) => {
          const { articles } = response
          const totalResults = 60
          res.json({
            articles,
            page,
            pages: Math.ceil(totalResults / pageSize),
          })
        })
    }
}

// @desc    Fetch trending news
// @route   GET /api/news/trending
// @access  Public
const getTrending = (req, res) => {
    const randomSource = sources[Math.floor(Math.random() * sources.length)].id

    newsapi.v2
      .everything({
        sources: randomSource,
        language: 'en',
        sortBy: 'popularity',
        pageSize: 20,
      })
      .then((response) => {
        const { articles } = response
        res.json(articles)
      })
}

// @desc    Fetch news sources
// @route   POST /api/news/sources
// @access  Public
const getSources = (req, res) => {
    newsapi.v2
      .sources({
        category: req.body.category,
        country: req.body.country,
      })
      .then((response) => {
        const { sources } = response
        if (sources.length === 0 || req.query.keyword) {
          newsapi.v2
            .sources({
              language: 'en',
              category: 'general',
              country: 'us',
            })
            .then((response) => {
              const { sources } = response
              res.json(sources)
            })
        } else {
          res.json(sources)
        }
      })
}

// @desc    Fetch trending news by source
// @route   POST /api/news/trending/source
// @access  Public
const getTrendingBySource = (req, res) => {
    const page = Number(req.query.pageNumber) || 1
    const pageSize = 8

    newsapi.v2
      .everything({
        sources: req.body.source,
        sortBy: 'popularity',
        pageSize: pageSize,
        page: page,
        //language: 'en',
      })
      .then((response) => {
        const { articles } = response
        const totalResults = 60
        res.json({
          articles,
          page,
          pages: Math.ceil(totalResults / pageSize),
        })
      })
}

// @desc    Fetch sources by params
// @route   POST /api/news/sources/params
// @access  Public
const getSourcesByParams = (req, res) => {
    const page = Number(req.query.pageNumber) || 1
    const pageSize = 8

    newsapi.v2
      .sources({
        language: req.body.language,
        category: req.body.category,
        country: req.body.country,
        pageSize: pageSize,
        page: page,
      })
      .then((response) => {
        const { sources } = response
        res.json({
          sources: sources.slice(pageSize * page - pageSize, pageSize * page),
          page,
          pages: Math.ceil(sources.length / pageSize),
        })
      })
}

export {
  getNews,
  getTrending,
  getSources,
  getTrendingBySource,
  getSourcesByParams,
}
