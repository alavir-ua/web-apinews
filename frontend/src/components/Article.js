import React from 'react'
import { Card } from 'react-bootstrap'
import moment from 'moment'
import imagefix from '../imagefix.jpeg'
moment.locale('en-gb')

const Article = ({ article }) => {
  return (
    <Card className="my-3 p-2 rounded">
      <Card.Img
        src={article.urlToImage !== 'null' ? article.urlToImage : imagefix}
        variant="top"
      />
      <Card.Body>
        <Card.Title as="h3">
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            {article.title}
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
        <Card.Text as="p">
          <b>
            <span style={{ color: '#df691a' }}>Description:</span>
          </b>
          &nbsp;{article.description ? article.description : 'Unknown'}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Article
