import React from 'react'
import { Route, useLocation } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, Image } from 'react-bootstrap'
import Logo from '../logo.gif'
import SearchBox from './SearchBox'

const Header = () => {
  const location = useLocation()

  const isActive = (pageMatch, path = '') => {
    if (location.pathname === path || location.pathname.includes(pageMatch)) {
      return { color: '#ff9900', background: 'transparent' }
    } else {
      return { color: '#aa9d99', background: 'transparent' }
    }
  }

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <Image
                src={Logo}
                alt="Breaking news"
                style={{ width: '170px', height: '57px' }}
              />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/" style={isActive('home', '/')}>
                <Nav.Link>
                  <i className="fas fa-home"></i>
                  &nbsp; Home
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/trending" style={isActive('trending')}>
                <Nav.Link>
                  <i className="fas fa-signal"></i>
                  &nbsp; Trending
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/sources" style={isActive('sources')}>
                <Nav.Link>
                  <i className="fas fa-globe"></i>
                  &nbsp; Sources
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about" style={isActive('about')}>
                <Nav.Link>
                  <i className="fas fa-info-circle"></i>
                  &nbsp; About
                </Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav className="ml-auto">
              <Route
                render={({ history }) => <SearchBox history={history} />}
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
