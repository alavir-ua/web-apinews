import React from 'react'
import { Card } from 'react-bootstrap'
import imagefix from '../imagefix.jpeg'
import moment from 'moment'
moment.locale('en-gb')

const ArticleTrending = ({ article }) => {
  return (
    <Card
      className="my-3 p-2 rounded"
      style={{ fontSize: '1rem', height: '26rem' }}
    >
      <Card.Img
        src={article.urlToImage !== 'null' ? article.urlToImage : imagefix}
        variant="top"
        style={{ height: '10rem' }}
      />
      <Card.Body>
        <Card.Title as="h5">
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            {article.title.substr(0, 60)}...
          </a>
        </Card.Title>
        <Card.Text as="p">
          <b>
            <span style={{ color: '#df691a' }}>Author:</span>
          </b>
          &nbsp;{article.author ? article.author : 'Unknown'}
        </Card.Text>
        <Card.Text as="p">
          <b>
            <span style={{ color: '#df691a' }}>Published at:</span>
          </b>
          &nbsp;{moment(article.publishedAt).format('LLL')}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ArticleTrending
