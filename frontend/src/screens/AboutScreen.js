import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Meta from '../components/Meta'

const AboutScreen = () => {
  return (
    <>
      <Meta title="Sources" />
      <h2>About</h2>
      <Row style={{border: '1px solid #000000', padding: '1.5rem', borderRadius: '4px'}}>
        <Col>
          News API is a simple HTTP REST API for searching and retrieving live
          articles from all over the web. It can help you answer questions like:
          <ul>
            <li>What top stories is TechCrunch running right now?</li>
            <li>
              What new articles were published about the next iPhone today?
            </li>
            <li>
              Has my company or product been mentioned or reviewed by any blogs
              recently?
            </li>
          </ul>
          You can search for articles with any combination of the following
          criteria:
          <ul>
            <li>
              <b>
                <span style={{ color: '#df691a' }}>Keyword or phrase</span>
              </b>
              . Eg: find all articles containing the word 'Microsoft'.
            </li>
            <li>
              <b>
                <span style={{ color: '#df691a' }}>Date published</span>
              </b>
              . Eg: find all articles published yesterday.
            </li>
            <li>
              <b>
                <span style={{ color: '#df691a' }}>Source domain name</span>
              </b>
              . Eg: find all articles published on thenextweb.com.
            </li>
            <li>
              <b>
                <span style={{ color: '#df691a' }}>Language</span>
              </b>
              . Eg: find all articles written in English.
            </li>
          </ul>
          You can sort the results in the following orders:
          <ul>
            <li>Date published</li>
            <li>Relevancy to search keyword</li>
            <li>Popularity of source</li>
          </ul>
          You need an API key to use the API - this is a unique key that
          identifies your requests. They're free while you're in development.
          <br />
          Some of the above options for this service API are implemented on this
          site.
        </Col>
      </Row>
    </>
  )
}

export default AboutScreen
