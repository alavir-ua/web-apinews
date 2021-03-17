import React from 'react'
import { Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

const NewsCarousel = () => {
  const trendingList = useSelector((state) => state.trendingList)
  const { loading, error, articles } = trendingList

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <>
      <h3 style={{ marginBottom: '1rem' }}>Trending</h3>
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {articles.map((article) => (
          <Card
            key={article.url}
            style={{ height: '22rem', marginRight: '0.1rem' }}
          >
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <Card.Img
                variant="top"
                src={article.urlToImage}
                style={{ height: '15rem' }}
              />
            </a>
            <Card.Body>
              <Card.Title>
                <h6>{article.title}</h6>
              </Card.Title>
            </Card.Body>
          </Card>
        ))}
      </Carousel>
    </>
  )
}

export default NewsCarousel
