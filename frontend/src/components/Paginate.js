import React from 'react'
import { Pagination } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Paginate = ({ type = '', pages, page, keyword = '' }) => {
  const link = (x) => {
    if (type === 'home') {
      if (keyword) {
        return `/home/search/${keyword}/page/${x + 1}`
      } else {
        return `/home/page/${x + 1}`
      }
    } else if (type === 'trending') {
      return `/trending/page/${x + 1}`
    } else {
      return `/sources/page/${x + 1}`
    }
  }

  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          <LinkContainer key={x + 1} to={link(x)} style={{ marginTop: '2rem' }}>
            <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  )
}

export default Paginate
