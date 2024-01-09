import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Button, Form, ListGroup } from 'react-bootstrap'
import Meta from '../components/Meta'
import Article from '../components/Article'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import NewsCarousel from '../components/NewsCarousel'
import countries from '../data/countries.js'
import categories from '../data/categories.js'
import Flag from 'react-world-flags'
import moment from 'moment'

import { listNews, listSources, listTrending } from '../actions/newsActions'
import { saveQueryParams } from '../actions/paramsActions'

const HomeScreen = ({ match, history }) => {
  const [countryCode, setCountryCode] = useState('')
  const [categoryCode, setCategoryCode] = useState('')

  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const currentDate = new Date().toISOString()

  const dispatch = useDispatch()

  const newsList = useSelector((state) => state.newsList)
  const { loading, error, articles, page, pages } = newsList

  const stateParams = useSelector((state) => state.queryParams)
  const { country: stateCountry, category: stateCategory } = stateParams

  const sourcesList = useSelector((state) => state.sourcesList)
  const { loading: sourceLoading, error: sourceError, sources } = sourcesList

  const localParams = {
    category: categoryCode,
    country: countryCode,
    source: 'cnn',
    language:'en'
  }

  useEffect(() => {
    setCountryCode(stateCountry)
    setCategoryCode(stateCategory)
    dispatch(listNews(stateParams, pageNumber, keyword))
  }, [dispatch, stateCountry, stateCategory, stateParams, pageNumber, keyword])

  useEffect(() => {
    dispatch(listSources(stateParams))
  }, [dispatch, stateParams])

  useEffect(() => {
    dispatch(listTrending())
  }, [dispatch])

  const submitHandler = (e) => {
    e.preventDefault()
    if (JSON.stringify(stateParams) !== JSON.stringify(localParams)) {
      history.push('/')
      dispatch(saveQueryParams(localParams))
    }
  }

  return (
    <>
      <Meta title="Home" />
      <Form onSubmit={submitHandler}>
        <Row>
          <Col sm={12} md={4} lg={4} xl={4}>
            <Form.Group controlId="countryCode">
              <Form.Control
                name="countryCode"
                value={countryCode}
                as="select"
                onChange={(e) => setCountryCode(e.target.value)}
                style={{ borderRadius: '4px' }}
              >
                {countries.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col sm={12} md={4} lg={4} xl={4}>
            <Form.Group controlId="categoryCode">
              <Form.Control
                name="categoryCode"
                value={categoryCode}
                as="select"
                onChange={(e) => setCategoryCode(e.target.value)}
                style={{ borderRadius: '4px' }}
              >
                {categories.map((category) =>
                  Object.entries(category).map(([key, value]) => (
                    <option key={key} value={key}>
                      {value}
                    </option>
                  ))
                )}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col sm={12} md={4} lg={4} xl={4}>
            <div className=" btn date">{moment(currentDate).format('LL')}</div>
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
        <Col md={8} className="vl">
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            <>
              {!keyword ? (
                <h3>
                  News <Flag code={countryCode} height="20" />
                </h3>
              ) : (
                <h3>World news</h3>
              )}
              <Row>
                {articles.map((article) => (
                  <Col key={article.publishedAt} sm={12} md={12} lg={12} xl={12}>
                    <Article article={article} />
                  </Col>
                ))}
              </Row>
              <Paginate
                type="home"
                pages={pages}
                page={page}
                keyword={keyword ? keyword : ''}
              />
            </>
          )}
        </Col>
        <Col md={4}>
          <>
            <h3 style={{ marginBottom: '1.6rem' }}>Tags</h3>
            <div className="d-flex">
              <Button className="flex-fill tag">
                <a
                  href="https://www.forbes.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Business
                </a>
              </Button>
              <Button className="flex-fill tag">
                <a
                  href="https://www.techmeme.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Technology
                </a>
              </Button>
              <Button className="flex-fill tag">
                <a
                  href="https://www.espn.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sport
                </a>
              </Button>
            </div>
            <div className="d-flex">
              <Button className="flex-fill tag">
                <a
                  href="https://www.trendyol.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lifestyle
                </a>
              </Button>
              <Button className="flex-fill tag">
                <a
                  href="https://www.cambridgeincolour.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Photography
                </a>
              </Button>
              <Button className="flex-fill tag">
                <a
                  href="https://artbox.nl/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Art
                </a>
              </Button>
            </div>
            <div className="d-flex">
              <Button className="flex-fill tag">
                <a
                  href="https://www.coursera.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Education
                </a>
              </Button>
              <Button className="flex-fill tag">
                <a
                  href="https://www.buzzfeed.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Humor
                </a>
              </Button>
              <Button className="flex-fill tag">
                <a
                  href="https://www.planetware.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Best Places
                </a>
              </Button>
            </div>
            <div className="d-flex" style={{ marginBottom: '1.6rem' }}>
              <Button className="flex-fill tag">
                <a
                  href="https://arstechnica.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Science
                </a>
              </Button>
              <Button className="flex-fill tag">
                <a
                  href="https://resumes.indeed.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Career
                </a>
              </Button>
              <Button className="flex-fill tag">
                <a
                  href="https://www.internetsociety.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Society
                </a>
              </Button>
            </div>
          </>
          <hr />
          {sourceLoading ? (
            <Loader />
          ) : sourceError ? (
            <Message variant="danger">{sourceError}</Message>
          ) : (
            <>
              <h3 style={{ marginBottom: '1.6rem', marginTop: '1.6rem' }}>
                Most Popular Sources
              </h3>
              <ListGroup className="source-list" variant="flush">
                {sources.map((source) => (
                  <ListGroup.Item key={source.id}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={source.url}
                      style={{ color: '#df691a' }}
                    >
                      {source.name}
                    </a>
                    <p>{source.description.substr(0, 80)}...</p>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </>
          )}
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <NewsCarousel />
        </Col>
      </Row>
    </>
  )
}

export default HomeScreen
