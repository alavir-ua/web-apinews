import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Button, Form, ListGroup } from 'react-bootstrap'
import Meta from '../components/Meta'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import countries from '../data/countries.js'
import categories from '../data/categories.js'
import languages from '../data/languages'

import { listSourcesParams } from '../actions/newsActions'
import { saveQueryParams } from '../actions/paramsActions'

const SourcesScreen = ({ match, history }) => {
  const [countryCode, setCountryCode] = useState('')
  const [categoryCode, setCategoryCode] = useState('')
  const [languageCode, setLanguageCode] = useState('')

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const stateParams = useSelector((state) => state.queryParams)
  const {
    category: stateCategory,
    country: stateCountry,
    source: stateSource,
    language: stateLanguage,
  } = stateParams

  const sourcesParamsList = useSelector((state) => state.sourcesParamsList)
  const { loading, error, sources, page, pages } = sourcesParamsList

  const localParams = {
    category: categoryCode,
    country: countryCode,
    source: stateSource,
    language: languageCode,
  }

  useEffect(() => {
    setCountryCode(stateCountry)
    setCategoryCode(stateCategory)
    setLanguageCode(stateLanguage)
    dispatch(listSourcesParams(stateParams, pageNumber))
  }, [dispatch, stateCountry, stateCategory, stateLanguage, stateParams, pageNumber])

  const submitHandler = (e) => {
    e.preventDefault()
    if (JSON.stringify(stateParams) !== JSON.stringify(localParams)) {
      history.push('/sources')
      dispatch(saveQueryParams(localParams))
    }
  }

  return (
    <>
      <>
        <Meta title="Sources" />
        <Form onSubmit={submitHandler}>
          <Row>
            <Col sm={4} md={3} lg={3} xl={3}>
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
            <Col sm={4} md={3} lg={3} xl={3}>
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
            <Col sm={4} md={6} lg={6} xl={6}>
              <Row>
                <Col>
                  <Form.Group controlId="languageCode">
                    <Form.Control
                      name="languageCode"
                      value={languageCode}
                      as="select"
                      onChange={(e) => setLanguageCode(e.target.value)}
                      style={{ borderRadius: '4px' }}
                    >
                      {languages.map((language) => (
                        <option key={language.code} value={language.code}>
                          {language.name}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col>
                  <Button
                    type="submit"
                    style={{
                      borderRadius: '4px',
                      display: 'inline-block',
                      float: 'right',
                    }}
                  >
                    Find sources
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
        <hr />
        <Row>
          <Col sm={12} md={12} lg={12} xl={12}>
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant="danger">{error}</Message>
            ) : sources.length !== 0 ? (
              <>
                <h3 style={{ marginBottom: '1.5rem' }}>Sources by params</h3>
                <Row>
                  <Col sm={12} md={12} lg={12} xl={12}>
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
                          <p>{source.description}</p>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Col>
                </Row>
                <Paginate type="sources" pages={pages} page={page} />
              </>
            ) : (
              <Message variant="danger">
                There are no resources for your request...
              </Message>
            )}
          </Col>
        </Row>
      </>
    </>
  )
}

export default SourcesScreen
