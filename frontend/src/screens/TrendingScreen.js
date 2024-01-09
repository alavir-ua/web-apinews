import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Button, Form } from 'react-bootstrap'
import Meta from '../components/Meta'
import ArticleTrending from '../components/ArticleTrending'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import sources from '../data/sources'
import { saveQueryParams } from '../actions/paramsActions'
import { listTrendingSources } from '../actions/newsActions'

const TrendingScreen = ({ match, history }) => {
  const [sourceId, setSourceId] = useState('')

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const stateParams = useSelector((state) => state.queryParams)
  const {
    category: stateCategory,
    country: stateCountry,
    source: stateSource,
  } = stateParams

  const trendingSourceList = useSelector((state) => state.trendingSourceList)
  const { loading, error, articles, page, pages } = trendingSourceList

  const localParams = {
    category: stateCategory,
    country: stateCountry,
    source: sourceId,
  }

  useEffect(() => {
    setSourceId(stateSource)
    dispatch(listTrendingSources(stateParams, pageNumber))
  }, [dispatch, stateSource, stateParams, pageNumber])

  const submitHandler = (e) => {
    e.preventDefault()
    if (JSON.stringify(stateParams) !== JSON.stringify(localParams)) {
      history.push('/trending')
      dispatch(saveQueryParams(localParams))
    }
  }

  return (
    <>
      <Meta title="Trending" />
      <Form onSubmit={submitHandler}>
        <Row>
          <Col sm={6} md={6} lg={6} xl={6}>
            <Form.Group controlId="countryCode">
              <Form.Control
                name="countryCode"
                value={sourceId}
                as="select"
                onChange={(e) => setSourceId(e.target.value)}
                style={{ borderRadius: '4px' }}
              >
                {sources.map((source) => (
                  <option key={source.id} value={source.id}>
                    {source.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col
            sm={{ offset: 1 }}
            md={{ offset: 1 }}
            xl={{ offset: 1 }}
            lg={{ offset: 1 }}
          >
            <Button
              type="submit"
              style={{ borderRadius: '4px', float: 'right' }}
            >
              Find news
            </Button>
          </Col>
        </Row>
      </Form>
      <hr />
      <Row>
        <Col>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            <>
              <h3>Trending of sources</h3>
              <Row>
                {articles.map((article) => (
                  <Col key={article.publishedAt} sm={12} md={6} lg={4} xl={3}>
                    <ArticleTrending article={article} />
                  </Col>
                ))}
              </Row>
              <Paginate type="trending" pages={pages} page={page} />
            </>
          )}
        </Col>
      </Row>
    </>
  )
}

export default TrendingScreen
