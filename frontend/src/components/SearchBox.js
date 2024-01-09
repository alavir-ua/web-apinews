import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/home/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        style={{ borderRadius: '3px' }}
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search News..."
        className="mr-sm-2 ml-sm-5"
      ></Form.Control>
      <Button type="submit" style={{ borderRadius: '4px' }}>
        Search
      </Button>
    </Form>
  )
}

export default SearchBox
